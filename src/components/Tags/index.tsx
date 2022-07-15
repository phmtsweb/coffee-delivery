import { TagItem, TagsContainer } from './styles';

interface TagsProps {
  tags: string[];
}

export function Tags({ tags }: TagsProps) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </TagsContainer>
  );
}
