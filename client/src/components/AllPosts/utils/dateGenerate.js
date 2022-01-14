import moment from "jalali-moment";

export const getNowTime = () => {
  const months = [
    "دی",
    "بهمن",
    "اسفند",
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
  ];
  const month = new Date().getMonth();
  let before;
  months.forEach((el, index) => {
    if (index === month) {
      before = months.slice(month);
    }
  });

  return { month: before };
};
