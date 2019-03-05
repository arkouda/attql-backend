import {
    Entity,
    Column,
    PrimaryColumn
} from 'typeorm';

@Entity({name: 'attendance'})
export class Attendance {

    @PrimaryColumn("int")
    day: number;

    @PrimaryColumn("int")
    studid: number;

    @Column("time")
    arrivalTime: Date;

    @Column("time")
    departTime: Date;

} 
