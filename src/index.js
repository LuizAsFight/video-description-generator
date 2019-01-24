const VideoDescriptionGenerator = {
  titleIcon: '➤',
  linkIcon: '🔗',
  clockIcon: '⏰',
  afterTitleDivider: '       ',
  afterLinkDivider: '         ',
  generateDescription: (items) => {
    if (!Array.isArray(items)) {
      items = [items];
    }

    return items.reduce((prev, { title, link, time }, i) => {
      console.log({ title, link, time });
      const _time = (typeof time === 'string' && time.indexOf(':')) ? time : VideoDescriptionGenerator._parseTime(time);
      prev += `${title ? `${VideoDescriptionGenerator.titleIcon} ${title}${VideoDescriptionGenerator.afterTitleDivider}` : ''}${link ? `${VideoDescriptionGenerator.linkIcon} ${link}${VideoDescriptionGenerator.afterLinkDivider}` : ''}${`${VideoDescriptionGenerator.clockIcon} ${_time}`}
`;
      return prev;
    }, ``);
  },
  _parseTime: (_time) => {
    const time = parseInt(_time, 10);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const strSeconds = `${seconds.toString().length === 1 ? '0' : ''}${seconds.toString()}`;

    return `${minutes}:${strSeconds}`;
  }
}

export default VideoDescriptionGenerator;