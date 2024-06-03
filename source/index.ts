import { RobloxGridClient } from './client';

const client = new RobloxGridClient('127.0.0.1', 12345);
client.connect();

const bodyV1 = "<roblox:Test>Example V1 Body</roblox:Test>";
const bodyV2 = "<ns1:Test>Example V2 Body</ns1:Test>";
// tried doing the send
client.sendSerializedV1(bodyV1);
client.sendSerializedV2(bodyV2);

setTimeout(() => {
    client.disconnect();
}, 5000);
