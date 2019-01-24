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
      const _time = time ? (typeof time === 'string' && time.indexOf(':')) ? time : VideoDescriptionGenerator._parseTime(time) : time;
      if (title || _time || link)
      prev += `${title ? `${VideoDescriptionGenerator.titleIcon} ${title}${VideoDescriptionGenerator.afterTitleDivider}` : ''}${link ? `${VideoDescriptionGenerator.linkIcon} ${link}${VideoDescriptionGenerator.afterLinkDivider}` : ''}${_time ? `${VideoDescriptionGenerator.clockIcon} ${_time}` : ''}
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