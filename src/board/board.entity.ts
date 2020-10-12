import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp } from 'typeorm';

@Entity("board")
export class BoardEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", length: 10 })
    writer: string;

    @Column({ type: "varchar", length: 100 })
    title: string;

    @Column({ type: "varchar", length: 1000 })
    text: string;

    @CreateDateColumn()
    date: Date

    @UpdateDateColumn()
    update: Date
}