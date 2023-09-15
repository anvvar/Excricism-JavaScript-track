// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.


/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
 const tracks=new Set(playlist);
 const musiclist=Array.from(tracks)
 return musiclist ;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const tracks=new Set(playlist);
  return tracks.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const tracks=new Set(playlist);
  tracks.add(track);
  const musiclist=Array.from(tracks);
  return musiclist ;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const tracks=new Set(playlist);
  tracks.delete(track);
  const musiclist=Array.from(tracks);
  return musiclist ;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const artists=new Set(playlist.map((track)=>track.split(' - ')[1]));
  const musiclist=Array.from(artists);
  return musiclist ;
}
