import { useQuery } from "react-query";
import { getAcquisitions } from "../services/AcquisitionService";

export const useAcquisitions = () =>
  useQuery("acquisitions", getAcquisitions)