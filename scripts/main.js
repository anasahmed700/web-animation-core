cloudElement = document.querySelector('.cloud-div')

animatedCloud = cloudElement.animate([
  { transform: 'translate(100%, 0)' }, { transform: 'translate(-100%, 0)' }
], {
  duration: 6000,
  iterations: Infinity,
  playbackRate: 1,
})

birdsElement = document.querySelector('.bird-div')
animatedBird = birdsElement.animate([
  { transform: 'translate(100%, 0)' }, { transform: 'translate(-100%, 0)' }
], {
  duration: 5000,
  iterations: Infinity,
  playbackRate: 1,
})

planeElement = document.querySelector('.plane-div')
animatedPlane = planeElement.animate([
  { transform: 'translate(-100%, 100%)' }, { transform: 'translate(50%, 50%)' },
  { transform: 'translate(50%, 50%)' }, { transform: 'translate(100%, -120%)' }
], {
  duration: 10000,
  iterations: Infinity,
})

document.querySelector('.increase').addEventListener('click', function(){
  animatedCloud.updatePlaybackRate(animatedCloud.playbackRate * 1.2)
  animatedBird.updatePlaybackRate(animatedBird.playbackRate * 1.2)
})

document.querySelector('.decrease').addEventListener('click', function(){
  animatedCloud.updatePlaybackRate(animatedCloud.playbackRate / 1.2)
  animatedBird.updatePlaybackRate(animatedBird.playbackRate / 1.2)
})
