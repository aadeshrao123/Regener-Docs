# URGChatComponent

The `URGChatComponent` is the main interface for sending and receiving chat messages.

## Functions

### `ProcessChatInput`
Processes a raw string input, checking for command prefixes (like `/p`) and routing the message to the correct channel.
- **`InputText`**: The raw text entered by the player.
- **`CurrentChannelContext`**: The default channel to use if no prefix is found.

### `SendChatMessage`
Manually sends a message to a specific channel.
- **`Content`**: The message text.
- **`Channel`**: The Gameplay Tag representing the channel.
- **`TargetName`**: (Optional) The name of the target player for direct messages.

### `BlockPlayer` / `UnblockPlayer`
Adds or removes a player ID from the local block list. Messages from blocked players will not trigger the `OnMessageReceived` event.

### `IsPlayerBlocked`
Returns true if the given player ID is currently blocked.

## Events

### `OnMessageReceived`
Triggered whenever a valid chat message is received.
- **Parameter**: `FRGChatMessage Message`
