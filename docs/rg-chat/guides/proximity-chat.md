# Proximity Chat

The RG Chat System includes built-in support for distance-based chat, often called "Local" or "Proximity" chat.

## How it Works

Proximity chat is handled entirely on the server. When a message is sent to a channel that has `bHasRangeLimit` enabled:

1. The server identifies the sender's location via their `Pawn`.
2. The server iterates through all active players.
3. For each player, it checks if their `Pawn` is within the configured `Range` from the sender.
4. Only players within that range receive the `Client_ReceiveMessage` RPC.

## Configuration

1. Open your **Chat Data Asset**.
2. Find the channel you want to make proximity-based (e.g., "Local").
3. Check **Has Range Limit**.
4. Set the **Range** value (e.g., `3000` for 30 meters).

## Troubleshooting

- **No Pawn**: Proximity chat requires both the sender and receivers to have an active `Pawn` (Character/Actor) in the world. If a player is currently dead or spectating without a pawn, they may not send or receive proximity messages.
- **Dedicated Server**: This logic is fully compatible with dedicated servers as it runs server-side.
