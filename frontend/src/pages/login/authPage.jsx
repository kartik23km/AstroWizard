import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setError("");
    setSuccess(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setError("Please enter email and password");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email, id: data.id }));
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email, id: data.id }));
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email, id: data.id }));
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email, id: data.id }));
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Left Section */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-10">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full border border-gold/20 bg-gold/10 px-4 py-1 text-xs tracking-[0.3em] text-gold uppercase">
              ✦ AstroWizard ✦
            </span>

            <h1 className="font-Cinzel text-5xl leading-tight font-bold text-soft-white">
              Unlock The Wisdom Written In The Stars
            </h1>

            <p className="mt-6 text-lg leading-8 text-light-gray/70">
              Discover cosmic insights, connect with expert astrologers, and
              begin your spiritual journey through the mystical universe of
              AstroWizard.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {[
                "Personalized astrology guidance",
                "Certified Vedic astrologers",
                "Relationship & career insights",
                "Daily cosmic predictions",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                  <p className="text-light-gray/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center px-4 py-10 md:px-8">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-dark-surface/40 p-6 backdrop-blur-xl md:p-8 shadow-[0_0_40px_rgba(109,40,217,0.15)]">
            {/* Mobile Heading */}
            <div className="mb-8 text-center lg:hidden">
              <h1 className="font-Cinzel text-3xl font-bold text-soft-white">
                AstroWizard
              </h1>

              <p className="mt-2 text-sm text-light-gray/60">
                Enter the mystical universe
              </p>
            </div>

            {/* Tabs */}
            <div className="relative mb-8 flex rounded-2xl border border-white/5 bg-space-dark/80 p-1 overflow-hidden">
              {/* Sliding Active Background */}
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-linear-to-r from-primary to-violet-glow shadow-lg shadow-violet-glow/20 transition-all duration-300 ease-in-out ${
                  activeTab === "login" ? "left-1" : "left-[calc(50%+2px)]"
                }`}
              />

              {/* Login Button */}
              <button
                onClick={() => handleTabChange("login")}
                className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === "login"
                    ? "text-soft-white"
                    : "text-light-gray/60 hover:text-soft-white"
                }`}
              >
                Login
              </button>

              {/* Register Button */}
              <button
                onClick={() => handleTabChange("register")}
                className={`relative z-10 flex-1 rounded-xl py-3 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  activeTab === "register"
                    ? "text-soft-white"
                    : "text-light-gray/60 hover:text-soft-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* Error & Success Messages */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                ✦ {error}
              </div>
            )}
            {success && (
              <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                ✦ Cosmic alignment successful! Entering the cosmos...
              </div>
            )}

            {/* LOGIN FORM */}
            {activeTab === "login" && (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Password
                  </label>

                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="text-sm text-gold hover:text-soft-gold transition-colors duration-300"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-violet-glow py-3 font-medium text-soft-white shadow-lg shadow-violet-glow/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Aligning stars..." : "Enter The Cosmos"}
                </button>
              </form>
            )}

            {/* REGISTER FORM */}
            {activeTab === "register" && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Password
                  </label>

                  <input
                    type="password"
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Create password"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-light-gray/70">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    required
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className="w-full rounded-xl border border-white/5 bg-space-dark/80 px-4 py-3 text-soft-white outline-none transition-all duration-300 placeholder:text-light-gray/30 focus:border-violet-glow/50 focus:shadow-[0_0_20px_rgba(109,40,217,0.15)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer rounded-xl bg-linear-to-r from-primary to-violet-glow py-3 font-medium text-soft-white shadow-lg shadow-violet-glow/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Mapping horoscope..." : "Begin Your Journey"}
                </button>
              </form>
            )}

            {/* Footer */}
            <div className="mt-8 border-t border-white/5 pt-6 text-center">
              <p className="text-sm text-light-gray/50">
                By continuing, you agree to our cosmic terms & privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
