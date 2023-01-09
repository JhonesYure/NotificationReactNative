import PushNotification from "react-native-push-notification";
import CupomScreen from "../Screens/CupomScreen";



class NotificationManager 
{
    setNavegator = (newNavegator) =>{
        avegator = newNavegator;
    }

    configure = () =>
    {
        PushNotification.configure({
            onRegister: function (token)
            {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notifications)
            {
                console.log("[NotificationManager] onNotification:", notifications);
                avegator.navigate("CuponScreen" + notifications.id)
            },
        })
    }

    NotificationCuponOn = (id, title, message, data = {}, options = {}) =>
    {
        return{
            id: id,
            channelId: "my channel",
            autoCancel: true,
            largeIcon : options.largeIcon || "ic_launcher",
            smallIcon : options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate : options.vibrate || 'false',
            vibration: options.vibration || 300,
            priority : options.priority || "high",
            importance : options.importance || "high",
            Data: data,
        }
    }

    ShowNotification = (id, title, message, data = {}, options ={}) =>
    {
        PushNotification.localNotification({
            ...this.NotificationCuponOn(id, title, message,data,options),

                title: title || "",
                message: message || "Notificação por gesto do usuario",
                playSound: options.playSound || false,
                soundName: options.soundName || 'default',
                userInteraction: false,
                channelId: 'my channel'
        })
    }

    cancelAllLocalNotifications = () =>
    {
        PushNotification.cancelAllLocalNotifications();
    }

    createChannel()
    {
        PushNotification.createChannel({
            channelId: "my channel",
            channelName: "my channel",
            channelDescription: "A channel to categorise your notifications",
        },
            (created) => console.log(`createChannel returned '${created}'`)
        );
    }

  NotificationScheduleNextFood() {
    PushNotification.localNotification({
        id:2,
        message: "Hora da boia!",
        date: new Date(Date.now() + 60 * 1000),
        repeatTime: 1,
        repeatType: 'minute',
        channelId: "my channel",
    });
    }  
  NotificationScheduleOffer()
  {
    PushNotification.localNotification({
        id:3,
        message: "Ofertas quentinhas pra você",
        date: new Date(Date.now() + 60 *1000),
        repeatTime: 2,
        repeatType: 'minute',
        channelId: "my channel",
    });
  }

  ClearNotificationsLocal()
  {
    PushNotification.cancelAllLocalNotifications()
  }
}

export const Notification = new NotificationManager();