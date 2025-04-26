const { generateThumbnail } = require("@whiskeysockets/baileys");

async function handleCommand(sock, msg, text) {
    const jid = msg.key.remoteJid;

    switch (text.toLowerCase()) {
        case '!ping':
            await sock.sendMessage(jid, { text: 'Pong!' });
            break;
        
        case '!menu':
            await sock.sendMessage(jid, {
                text: '*Andy Bot Respon* \n\n`MENU`\n1. !ping\n2. !script\n\n\n `RESPON`.\n- p/ndi/halo\n> reply:Kenapa',
                });
                break;
            
        
        case '!owner':
            await sock.sendMessage(jid, { text: 'Owner: 628xxxx' });
            break;
        
        case '!donasi':
            await sock.sendMessage(jid, { text: 'Donasi via Dana: 08xxxxxxx' });
            break;
            
            
            case 'p':
            case 'ndi':
            case 'ndii':
            case 'Ndi':
            case 'Ndii':
                await sock.sendMessage(jid, { 
                    text: `Kenapa @${jid.split('@')[0]}?`, 
                    mentions: [jid] 
                });
                break;                
                       

        default:
            // Kalau command ga dikenali, bisa diabaikan atau kasih respon default
            // await sock.sendMessage(jid, { text: 'Command tidak dikenal.' });
            break;
    }
}

module.exports = { handleCommand };
