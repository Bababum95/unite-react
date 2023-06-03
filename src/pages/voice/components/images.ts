import teamspeakImage from '../../../asets/images/voice/teamspeak.png'
import mumbleImage from '../../../asets/images/voice/mumble-gray.png'
import instructionImage from '../../../asets/images/voice/instruction.png'
import teamspeakIPImage from '../../../asets/images/voice/teamspeak-ip.png'
import mumbleIPImage from '../../../asets/images/voice/mumbli-ip.png'

interface IImage {
    'Mumble': string
    'Teamspeak': string
}
interface IImages {
    firstBlock: IImage
    secondBlock: string
    thirdBlock: IImage
}

const images: IImages = {
    firstBlock: {
        'Mumble': mumbleImage,
        'Teamspeak': teamspeakImage
    },
    secondBlock: instructionImage,
    thirdBlock: {
        'Mumble': mumbleIPImage,
        'Teamspeak': teamspeakIPImage
    }
}


export default images