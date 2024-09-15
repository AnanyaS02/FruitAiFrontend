import React, {useState} from 'react';

function FormSection({ email, setEmail, password, setPassword }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <form>
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>
      <div className="flex gap-3 self-start mt-12 text-2xl text-neutral-400">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e08e335da3d584b43b7a62d89a0ef82f513077720d93dea96bee76645eec635?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
          alt="Email"
          className="object-contain shrink-0 my-auto w-6 aspect-square"
        />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="basis-auto"
          aria-label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <div className="flex gap-10 self-start mt-12">
        <div className="flex flex-col">
          <div className="flex gap-3 self-start text-2xl whitespace-nowrap text-neutral-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
              alt="Password"
              className="object-contain shrink-0 self-start w-6 aspect-square"
            />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-8 text-xl text-stone-500">
            <label htmlFor="remember-password" className="grow shrink w-[129px]">
              <input
                type="checkbox"
                id="remember-password"
                className="mr-2"
              />
              Remember password
            </label>
          </div>
        </div>
        <div className="flex flex-col self-start mt-2 text-xl text-sky-600">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e916130e5823bf82afc126cbee0a36dbb4579097c072bda36671c9c12de6766?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e"
            alt="Toggle Password visibility"
            className="object-contain self-end aspect-[1.83] w-[33px] cursor-pointer"
            onClick={togglePasswordVisibility}
          />
          <a href="/forget_password" className="mt-12">
            Forget password
          </a>
        </div>
      </div>
    </form>
  );
}

export default FormSection;
