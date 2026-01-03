# Blueprint UI Architecture

The RG Chat System comes with a set of pre-built, optimized Blueprint widgets. This guide explains how the system works internally, so you can customize it or build your own UI on top of the same logic.

## Widget Structure

The provided UI consists of three main widgets:

1.  **`WBP_ChatPanel`**: The main container for the chat interface. It handles input, message display, and channel filtering.
2.  **`WBP_ChatMessage`**: Represents a single chat line entry. This is the widget that gets pooled/reused.
3.  **`WBP_PlayerInfo`**: A context menu that appears when clicking on a player's name (for blocking, direct messaging, etc.).

## 1. Widget Polling System

To ensure optimal performance, the system uses a **Widget Pooling** mechanism instead of constantly creating and destroying widgets.

### How it Works
Instead of destroying a `WBP_ChatMessage` when it scrolls off-screen or when the chat is cleared, the system hides it and moves it to a "Pool". When a new message arrives, the system checks the pool:
*   **If Pool has widgets**: It grabs one, unhides it, updates its text/color, and moves it to the bottom.
*   **If Pool is empty**: It creates a new widget.

### Blueprint Logic (`CreateAndPoolWidget`)
This function handles the lifecycle of chat lines:
1.  **Check Pool**: Looks into the `PooledWidgets` array.
2.  **Recycle or Create**: Reuses an existing widget if available, or constructs a new one.
3.  **Limit History**: If the number of `ActiveChatMessages` exceeds `MaxChatHistory` (e.g., 100), the oldest message is removed from the visible list and sent back to the `PooledWidgets` array to be recycled.

## 2. Main Chat Panel (`WBP_ChatPanel`)

This is the central hub of the chat UI.

### Initialization
*   **On Construct**: The widget automatically finds the `URGChatComponent` on the player's State and binds to the `OnMessageReceived` event.

### Receiving Messages
*   **`OnMessageReceived` Event**: When the server sends a message, this event triggers the `CreateAndPoolWidget` logic to display it efficiently.
*   **Auto-Scroll**: The `Message_ScrollBox` is automatically scrolled to the end so the newest message is always visible.

### Sending Messages
*   **`OnTextCommitted`**: When the user presses Enter in the input box, the text is sent to the component via `ProcessChatInput`. This function automatically handles commands like `/p` (Party) or `/w` (Whisper).

## 3. Interaction & Context Menu (`WBP_PlayerInfo`)

The system includes a context menu that appears when clicking a player's name in the chat.

*   **Block/Unblock**: Calls `BlockPlayer` and `UnblockPlayer` on the Chat Component.
*   **Direct Message**: Sets the input field to `/w [PlayerName] `, allowing for quick private replies.

## Customization

You are free to modify these widgets. Since the core logic is driven by the C++ `URGChatComponent`, you can:
*   Change the visual style of `WBP_ChatMessage`.
*   Add new buttons to `WBP_PlayerInfo` (e.g., "Add Friend" or "Invite to Party").
*   Replace the entire UI with your own, as long as you hook into the `OnMessageReceived` event and call `ProcessChatInput`.
