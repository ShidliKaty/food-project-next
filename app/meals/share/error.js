"use client";
//используется если выводится ошибка а не сообщение в actions/shareMeal
export default function Error() {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
