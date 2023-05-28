import { NotificationMessage } from './Notification.styled';

export const Notification = ({ notification }) => {
  return (
    <div>
      <NotificationMessage>{notification}</NotificationMessage>
    </div>
  );
};
