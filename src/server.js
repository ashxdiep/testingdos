import Server from 'socket.io';

export default function startServer(){
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection', (socket) => {
    //receive current state when connect to the application
    socket.emit('state', store.getState().toJS());
    //receiving updates from store
    socket.on('action', store.dispatch.bind(store));
  });

}
