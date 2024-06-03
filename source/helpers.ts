export function createPacket(opcode: number, payload: Buffer): Buffer {
    const buffer = Buffer.alloc(2 + payload.length);
    buffer.writeUInt16BE(opcode, 0);
    payload.copy(buffer, 2);
    return buffer;
}

export function formatEnvelope(template: string, body: string): string {
    return template.replace('{{body}}', body);
}
