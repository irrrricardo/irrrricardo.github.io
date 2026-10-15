import NoteArticle from '@/components/NoteArticle';
import { findNote, notes } from '@/lib/notes';

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default function BlogPostPage({ params }) {
  const note = findNote(params.slug);

  if (!note) {
    return null;
  }

  return <NoteArticle note={note} />;
}
