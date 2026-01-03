# Data Structures

The RG Chat System uses several structures to manage configuration and message data.

## `FRGChatMessage`
The primary structure for chat messages.

| Property | Type | Description |
| :--- | :--- | :--- |
| `SenderID` | `FString` | Unique ID of the sender. |
| `SenderName` | `FString` | Display name of the sender. |
| `MessageContent`| `FString` | The actual message text. |
| `ChannelTag` | `FGameplayTag` | The channel this message belongs to. |
| `Timestamp` | `FDateTime` | When the message was sent. |

## `FRGChatChannelConfig`
Configuration for a single chat channel.

| Property | Type | Description |
| :--- | :--- | :--- |
| `DisplayName` | `FText` | UI name for the channel. |
| `Color` | `FLinearColor` | UI color for the channel. |
| `CommandPrefixes`| `TArray<FString>`| List of prefixes (e.g., `/all`). |
| `bRequiresTarget`| `bool` | True for direct/private messages. |
| `bHasRangeLimit` | `bool` | True for proximity-based chat. |
| `Range` | `float` | Distance in UU for range limit. |
| `RateLimit` | `FRGChatRateLimitConfig`| Anti-spam settings. |

## `FRGChatRateLimitConfig`
Spam prevention settings.

| Property | Type | Description |
| :--- | :--- | :--- |
| `MaxMessages` | `int32` | Max allowed messages in the window. |
| `TimeWindow` | `float` | Duration of the rate limit window in seconds. |
