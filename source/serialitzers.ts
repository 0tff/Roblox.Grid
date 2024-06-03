export const SERIALIZER_V1_ENVELOPE_TEMPLATE =
    `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:roblox="urn:Roblox">
    <soap:Body>
    {{body}}
    </soap:Body>
    </soap:Envelope>`;

export const SERIALIZER_V2_ENVELOPE_TEMPLATE =
    `<?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns1="http://roblox.com/" xmlns:ns2="http://roblox.com/RCCServiceSoap" xmlns:ns3="http://roblox.com/RCCServiceSoap12">
    <SOAP-ENV:Body>
    {{body}}
    </SOAP-ENV:Body>
    </SOAP-ENV:Envelope>`;
