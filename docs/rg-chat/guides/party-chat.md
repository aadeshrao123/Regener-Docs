# Party Chat Implementation

The RG Chat System includes built-in support for **Party Chat**, allowing players to communicate privately with their team or squad.

## How It Works

Unlike Global or Proximity chat, Party Chat requires the server to know which "team" a player belongs to. This is handled via the `IRGChatParticipantInterface`.

When a message is sent to the `Chat.Channel.Party` channel:
1. The server calls `GetChatPartyID()` on the sender's PlayerState.
2. It then iterates through all other players.
3. For each player, it calls `GetChatPartyID()` and compares it to the sender's ID.
4. If the IDs match, the message is delivered.

## Implementation Steps

To enable Party Chat in your game, you **must** implement the `IRGChatParticipantInterface` on your `PlayerState` class.

### 1. Add the Interface

In your `PlayerState` Blueprint (e.g., `BP_MyPlayerState`):
1. Go to **Class Settings**.
2. Under **Interfaces**, click **Add** and search for `RGChatParticipantInterface`.

### 2. Override `GetChatPartyID`

Once the interface is added, you will see `Get Chat Party ID` under the **Interfaces** section in your My Blueprint panel (you might need to double-click it to open the function graph).

**Logic:**
*   You need to return a `String` that represents the player's current party.
*   **Example**: If you have a variable `CurrentTeamID` (Integer) or `PartyGUID` (String), simply convert/return that value.
*   **Important**: Players with the **exact same string** returned by this function will be able to see each other's party messages.

### 3. Override `GetChatDisplayName` (Optional)

While you are there, you can also override `Get Chat Display Name`.
*   This allows you to return a custom name (e.g., " [Admin] PlayerName ") that will be displayed in the chat UI instead of the default Steam/Subsystem name.

## Testing Party Chat

1. Set up two players with the same Party ID (e.g., "TeamA").
2. Set up a third player with a different Party ID (e.g., "TeamB").
3. Have Player 1 send a message using the `/p` prefix (or whatever you configured for Party Chat).
4. **Result**: Player 2 should receive it, but Player 3 should not.
