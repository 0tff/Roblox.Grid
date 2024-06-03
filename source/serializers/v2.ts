import { RobloxGridCore } from './core';

export class RobloxGridV2 {
    private core: RobloxGridCore;

    constructor() {
        this.core = RobloxGridCore.getInstance();
    }

    serialize(data: any): string {
        // Serialize data according to Roblox Grid V2 protocol
        return JSON.stringify(data);
    }

    deserialize(data: string): any {
        // Deserialize data according to Roblox Grid V2 protocol
        return JSON.parse(data);
    }
}
