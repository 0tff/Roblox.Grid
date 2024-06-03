import net from 'net';

class RobloxGridClient {
    private client: net.Socket;

    constructor(private host: string, private port: number) {
        this.client = new net.Socket();
    }

    connect() {
        this.client.connect(this.port, this.host, () => {
            console.log('Connected');
        });

        this.client.on('data', (data) => {
            console.log('Received: ' + data);
        });

        this.client.on('close', () => {
            console.log('Connection closed');
        });
    }

    sendPacket(opcode: number, payload: Buffer) {
        const buffer = Buffer.alloc(2 + payload.length);
        buffer.writeUInt16BE(opcode, 0);
        payload.copy(buffer, 2);
        this.client.write(buffer);
    }

    disconnect() {
        this.client.end();
    }
}

const client = new RobloxGridClient('127.0.0.1', 12345);
client.connect();

const payload = Buffer.from([0xDE, 0xAD, 0xBE, 0xEF]);
client.sendPacket(0x1234, payload);

setTimeout(() => {
    client.disconnect();
}, 5000);
