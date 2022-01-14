import moment from "jalali-moment";

export const getNowTime = () => {
  const days = [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهار شنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه",
  ];

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

  const Hours = new Date().getHours();
  const min = new Date().getMinutes();
  const day = new Date().getDay();
  const month = new Date().getMonth();

  const moments = moment().locale("fa").format("DD");
  const nowMonth = months[month];

  if (min.toString().length === 1) {
    return { d: days[day], h: Hours, m: `0${min}` };
  } else {
    return { w: days[day], h: Hours, m: min, month: nowMonth, d: moments };
  }
};
