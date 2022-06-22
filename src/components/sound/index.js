import sound from '../../res/tim.mp3';

const timp3 = new Audio(sound);

export default function play() {
    timp3.play();
}