const GOOGLE_API_KEY="AIzaSyDKCCexJ7pd8_IAeSFrAg22dHJdZN1BW-U";
const buttons=["All", "Mixes", "Music", "The weekend", "Playlists", "KK", "Live music", "My mix", "Valentines", "Cricket", "Football", "Gym", "Recently added","Powerlifting","Hockey","Coke studio","Rapping","Rock music","indie music","indie pop","All", "Mixes", "Music", "The weekend"];
const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=100&key=${GOOGLE_API_KEY}`;

export {YOUTUBE_API};
export default buttons;