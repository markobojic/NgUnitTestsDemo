import { MessageService } from './message.service';
describe('MessageService', () => {
  let service: MessageService;

  it('should have no messages on start', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service = new MessageService();

    service.add('some message');

    expect(service.messages.length).toBe(1);
  });

  it('should delete all messages when clear is called', () => {
    service = new MessageService();
    service.add('some message');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
