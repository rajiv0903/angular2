export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
      editMode: 'on'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
      editMode: 'off'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
      editMode: 'on'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}