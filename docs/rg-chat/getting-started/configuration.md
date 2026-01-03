# Configuration

The RG Chat System is designed to be highly configurable via Unreal Engine's Data Assets and Project Settings.

## 1. Create a Chat Data Asset

The `URGChatData` asset is where you define your chat channels, their colors, and rate limits.

1. In the **Content Browser**, right-click and select `Miscellaneous -> Data Asset`.
2. Search for and select **RG Chat Configuration Asset** (`URGChatData`).
3. Open the new asset and configure your channels.

### Channel Configuration Fields

| Field | Description |
| :--- | :--- |
| **Display Name** | The human-readable name of the channel. |
| **Color** | The color used when displaying messages from this channel. |
| **Command Prefixes** | Array of strings (e.g., `/p`, `/party`) that trigger this channel. |
| **Requires Target** | If true, the message needs a specific target (used for Direct Messages). |
| **Has Range Limit** | If true, only players within a certain distance will receive the message. |
| **Range** | The distance in Unreal Units for range-limited chat. |
| **Rate Limit** | Configures how many messages a player can send within a time window. |

## 2. Register Global Settings

Once you have created your Chat Data Asset, you need to tell the plugin to use it globally.

1. Go to `Edit -> Project Settings`.
2. Search for **RG Chat System**.
3. Under the **General** category, assign your newly created Data Asset to the **Global Chat Data** field.

## 3. Editor Testing Settings

The plugin includes settings specifically for testing in the editor (PIE).

1. Go to `Project Settings -> RG Chat Testing`.
2. **Enable Random Player Names**: If checked, players in PIE will be assigned names from a predefined list.
3. **Editor Player Names**: A list of names to be used when testing multiplayer in the editor.
