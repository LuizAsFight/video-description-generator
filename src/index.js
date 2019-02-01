const VideoDescriptionGenerator = {
  titleIcon: '➤',
  maxTitleLength: 30,
  linkIcon: '🔗',
  clockIcon: '⏰',
  afterTitleDivider: `       `,
  afterLinkDivider: ``,
  afterTimeDivider: `  `,
  generateDescription: (items, { useIcons } = {}) => {
    if (!Array.isArray(items)) {
      items = [items];
    }

    return items.reduce((prev, { title, link, time }, i) => {
      const _time = ( time != undefined ) ?
        (typeof time === 'string' && time.indexOf(':'))
          ? time
          : VideoDescriptionGenerator._parseTime(time)
        : time;
      if (title || _time || link) {
        if (title && title.length > VideoDescriptionGenerator.maxTitleLength) {
          title = title.substring(0, VideoDescriptionGenerator.maxTitleLength) + '...';
        }
        prev += `${_time ? `${_time}${VideoDescriptionGenerator.afterTimeDivider}` : ''}${title ? `${title}` : ''}${link ? `${VideoDescriptionGenerator.afterTitleDivider}${link}${VideoDescriptionGenerator.afterLinkDivider}` : ''}
`;
      }
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