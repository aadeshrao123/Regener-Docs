# IRGChatParticipantInterface

Implement this interface on your `PlayerState` to provide the chat system with necessary player metadata.

## Functions

### `GetChatDisplayName` (BlueprintNativeEvent)
Returns the name that should be displayed in the chat window for this player.
- **Default Implementation**: Returns the standard `APlayerState::GetPlayerName()`.

### `GetChatPartyID` (BlueprintNativeEvent)
Returns a unique identifier for the player's current party.
- **Usage**: When a message is sent to the `Chat.Channel.Party` channel, only players with the same Party ID will receive it.
