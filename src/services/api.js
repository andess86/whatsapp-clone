export const mockMessages = [
  {
    incoming: true,
    message: 'Hi Vladimir',
  },
];

export const chats = [
  {
    id: '123',
    title: 'John',
    description: 'Hey there',
    avatar: 'http://www.codetic.net/demo/templates/Privado/img/avatar.png',
    messages: mockMessages,
  },
];

export const getChats = () =>
  new Promise(resolve => setTimeout(() => resolve(chats), 1000));

export const getMessages = () =>
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000));
