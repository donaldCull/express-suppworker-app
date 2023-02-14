import { SupportWorker } from "./types/SupportWorker"
import { SupportWorkerVisits } from "./types/SupportWorkerVisits"
import { Visits } from "./types/Visits"

const GetSupportWorkerVisits = (supportWorkerId: number, supportWorkers: SupportWorker[], visits: Visits[]): SupportWorkerVisits[]  => {
    try {
        const supportWorker: SupportWorker[] = supportWorkers.filter(suppWorker => suppWorker.supportWorkerId === supportWorkerId);
        const supportVisits: Visits[] = visits.filter(visit => visit.supportWorkerId === supportWorkerId);
        const supportWorkerVisits: SupportWorkerVisits[] =  supportVisits.map(sv => {
            return {
                visitId: sv.visitId,
                startDateTime: sv.startDateTime,
                endDateTime: sv.endDateTime,
                supportWorkerId: sv.supportWorkerId,
                name: supportWorker[0].name,
                contractedHours: supportWorker[0].contractedHours,
            }
        });
        return supportWorkerVisits.sort((a, b) => a.startDateTime + b.startDateTime);
    } catch (error) {
        return [];
    }
}

export default GetSupportWorkerVisits;