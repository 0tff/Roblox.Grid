import { RobloxGridCore } from './core';

export class RobloxGridV1 {
    private core: RobloxGridCore;

    constructor() {
        this.core = RobloxGridCore.getInstance();
    }

    serialize(data: any): string {
        // Serialize data according to Roblox Grid V1 protocol
        return JSON.stringify(data);
    }

    deserialize(data: string): any {
        // Deserialize data according to Roblox Grid V1 protocol
        return JSON.parse(data);
    }
}
