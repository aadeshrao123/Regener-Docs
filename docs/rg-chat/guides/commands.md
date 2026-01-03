# Command & Prefix System

Players can switch channels or send quick messages using prefixes, similar to most MMOs.

## Prefix Routing

When you pass a string to `URGChatComponent::ProcessChatInput`, the system checks the beginning of the string for any registered prefixes defined in your **Chat Data Asset**.

### Example:
If you have a "Party" channel configured with the prefix `/p`:
- Typing `/p hello everyone` will automatically send "hello everyone" to the **Party** channel.
- Typing `hello everyone` (without prefix) will send the message to the **Default Channel Context** passed into the function.

## Direct Messages (Whispers)

Direct messages use a special routing logic:
1. The system identifies a prefix associated with a channel that has `bRequiresTarget` enabled (e.g., `/w`).
2. It expects the format: `[Prefix] [TargetName] [Message]`.
3. **Example**: `/w JohnDoe hello there` will send "hello there" privately to JohnDoe.

## Visual Feedback

You can use the `CommandPrefixes` array in your UI to provide "Auto-complete" or "Channel Switching" suggestions to the player as they type.
