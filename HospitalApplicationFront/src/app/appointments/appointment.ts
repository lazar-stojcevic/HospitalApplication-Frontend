export class Appointment {
    constructor(public id: string,
        public patientId: string,
        public doctorId: string,
        public report: string,
        public price: string,
        public startTime: Date,
        public endTime: Date,
    ) { }
}