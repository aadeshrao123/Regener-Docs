# Component Setup

To use the chat system in your game, you need to integrate the `URGChatComponent` and implement the `IRGChatParticipantInterface`.

## 1. Adding the Chat Component

The `URGChatComponent` should be added to your project's **Player State** class.

### In Blueprints:
1. Open your `PlayerState` Blueprint.
2. Click **Add Component** and search for `RG Chat Component`.
3. Compile and Save.

### In C++:
```cpp
// YourPlayerState.h
UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Chat")
class URGChatComponent* ChatComponent;

// YourPlayerState.cpp
#include "Component/RGChatComponent.h"

AYourPlayerState::AYourPlayerState()
{
    ChatComponent = CreateDefaultSubobject<URGChatComponent>(TEXT("ChatComponent"));
}
```

## 2. Implementing the Participant Interface

The chat system uses `IRGChatParticipantInterface` to retrieve player information. You must implement this on your `PlayerState` class.

### Functions to Implement:

- **`GetChatDisplayName`**: Return the name that should appear in the chat box (e.g., Character Name or Steam Name).
- **`GetChatPartyID`**: Return a unique string for the player's party. This is used to filter "Party" channel messages.

## 3. Handling Received Messages

To display messages in your UI, bind to the `OnMessageReceived` delegate on the `URGChatComponent`.

```cpp
// Example binding in a Widget
ChatComponent->OnMessageReceived.AddDynamic(this, &UYourWidget::HandleChatMessage);
```

The delegate provides a `FRGChatMessage` struct containing:
- `SenderID`
- `SenderName`
- `MessageContent`
- `ChannelTag`
- `Timestamp`
