export async function capsule(dispatch,) {
  const api = await fetch("https://api.spacexdata.com/v3/capsules");
  const data = await api.json();

  dispatch({
    type: "capsule-data",
    data: data,
  });
  // console.log(data)
}

export const arr = [
  "https://www.spacex.com/static/images/dragon/desktop/DragonTrunk_Render_Desktop.jpg",
  "https://www.spacex.com/static/images/dragon/desktop/Dragon_Render_Desktop.jpg",
  "https://imgur.com/DaCfMsj.jpg",
  "https://imgur.com/azYafd8.jpg",
  "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
  "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
  "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
  "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
  "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
  "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
  "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
  "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
  "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
  "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
  "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
  "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
  "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_3.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_4.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_5.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_6.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_7.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_8.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_9.jpg",
  "https://www.spacex.com/static/images/falcon-heavy/FH_10.jpg",
  "https://www.spacex.com/static/images/dragon/refresh/DRAGON_DRAGON+ISS_800x1200_Mobile.jpg",
  "https://www.spacex.com/static/images/dragon/refresh/DRAGON_CRS-22_3840x2560_800x1200_Mobile.jpg",
];

export const capsuleArr = [
  "https://aviationweek.com/sites/default/files/2021-02/spacexdragoncapsule_0.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/iss065e002261_0.jpg",
  "https://www.universetoday.com/wp-content/uploads/2017/02/dragoncrew.8k.jpg",
  "https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg",
  "https://cdn.shopify.com/s/files/1/0173/8204/7844/articles/SpaceX-Crew-Dragon.jpg?v=1575766678&width=2048",
  "https://www.slashgear.com/img/gallery/spacex-crew-dragon-for-the-all-civilian-orbital-mission-has-an-incredible-toilet/dragon-crew-1067x800.jpg",
  "https://cdn.mos.cms.futurecdn.net/rcMuJGSUswb2wZEUk5TfZ.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/iss063e021563.jpg",
  "https://i.ytimg.com/vi/Cf_-g3UWQ04/maxresdefault.jpg",
  "https://spaceflightnow.com/wp-content/uploads/2021/07/E53zqVKXsAcMW4n.jpeg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/iss065e002261_0.jpg",
  "https://www.universetoday.com/wp-content/uploads/2017/02/dragoncrew.8k.jpg",
  "https://spacecenter.org/wp-content/uploads/2020/01/KSC-20200117-PH-SPX01_0001_medium-e1678724652148.jpg",
  "https://cdn.shopify.com/s/files/1/0173/8204/7844/articles/SpaceX-Crew-Dragon.jpg?v=1575766678&width=2048",
  "https://www.slashgear.com/img/gallery/spacex-crew-dragon-for-the-all-civilian-orbital-mission-has-an-incredible-toilet/dragon-crew-1067x800.jpg",
  "https://cdn.mos.cms.futurecdn.net/rcMuJGSUswb2wZEUk5TfZ.jpg",
  "https://www.nasa.gov/sites/default/files/thumbnails/image/iss063e021563.jpg",
  "https://i.ytimg.com/vi/Cf_-g3UWQ04/maxresdefault.jpg",
  "https://spaceflightnow.com/wp-content/uploads/2021/07/E53zqVKXsAcMW4n.jpeg"
];
