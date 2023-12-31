export default function CommentForm() {
  return (
    <div>
      <textarea />
      <button>add comment</button>
      <style>{`
        textarea {
          width: 400px;
          height: 100px;
          display: block;
          margin-bottom: 10px;
        }

        button {
          padding: 3px 4px;
        }
        @media (max-width: 750px) {
          textarea {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
