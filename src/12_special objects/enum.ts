// * Datentyp wöchentlcihes Meetinf mit title, startDate und weekDAy

type WeeklyMeeting = {
  title: string;
  startDate: Date;
  weekDay: string;
};

const dailyMeeting: WeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekDay: " Montag",
};
const dailyMeeting2: WeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekDay: " Monday",
};
const dailyMeeting3: WeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekDay: " MO",
};

const allMeetings: WeeklyMeeting[] = [
  dailyMeeting,
  dailyMeeting2,
  dailyMeeting3,
];
allMeetings.forEach((meeting: WeeklyMeeting) => {
  if (
    meeting.weekDay === "Montag" ||
    meeting.weekDay === "Monday" ||
    meeting.weekDay === "MO"
  )
    console.log("Meeting findet am Montag statt");
});

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Weekday.Monday);

type WeeklyMeeting2 = {
  title: string;
  startDate: Date;
  weekDay: Weekday;
};

const retroMeeting: WeeklyMeeting2 = {
  title: "Retro",
  startDate: new Date(),
  weekDay: Weekday.Thursday,
};
console.log(retroMeeting.weekDay);

// * Bestellstatus
enum OrderStatus {
  Created,
  Accepted,
  InProgress,
  InDelivery,
  Delivered,
  Cancelled,
  Deleted,
}

type ShopOrder = {
  number: number;
  customerNumber: number;
  status: OrderStatus;
};
const order477: ShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created,
};

console.log("Bestellung wirde angelegt.Status", order477.status);
order477.status = OrderStatus.Accepted;
console.log("Bezeichnung von Orderstatus Accepted: ", OrderStatus[1]);
//! Besser:
console.log(
  "Bezeichnung von Orderstatus Accepted: ",
  OrderStatus[order477.status]
);

//? eigene WErte vergeben
enum HttpStatusCode {
  Ok = 200,
  CREATED = 201,
  BADGATEWAY = 400,
  NOTFOUND = 404,
}
console.log(HttpStatusCode.NOTFOUND);
