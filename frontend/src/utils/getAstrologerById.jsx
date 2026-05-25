import astrologers from "../data/astrologers";

export const getAstrologerById = (id) => {
  return astrologers.find((astrologer) => astrologer.id === id);
};
