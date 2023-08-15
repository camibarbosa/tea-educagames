"use client";

import { useState } from "react";

export default function Contato() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contato", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <form id="contato"
        onSubmit={handleSubmit}
        className="py-4 mt-2 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname" className="font-semibold">Nome e sobrenome</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Laura Souza"
          />
        </div>

        <div>
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="laurasouza@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="font-semibold">Comentário</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Digite seu comentário aqui..."
          ></textarea>
        </div>

        <button className="bg-blue-500 p-2 text-white font-bold hover:bg-blue-600 ease-out rounded-md transition-shadow" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}