const VideoDescriptionGenerator = {
  titleIcon: '➤',
  linkIcon: '🔗',
  clockIcon: '⏰',
  afterTitleDivider: '       ',
  afterLinkDivider: '         ',
  generateTextToCopy: (items) => {
    if (!Array.isArray(items)) {
      items = [items];
    }

    return items.reduce((prev, { title, link, time }, i) => {
      prev += `${title ? `${VideoDescriptionGenerator.titleIcon} ${title}${VideoDescriptionGenerator.afterTitleDivider}` : ''}${link ? `${VideoDescriptionGenerator.linkIcon} ${link}${VideoDescriptionGenerator.afterLinkDivider}` : ''}${`${VideoDescriptionGenerator.clockIcon} ${time}`}
`;
      return prev;
    }, ``);
  }
}

export default VideoDescriptionGenerator;