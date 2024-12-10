/* need to disable eslint because "Mixed spaces and tabs." error*/
/* eslint-disable */
import { SpecIDInfoRepository } from "../../../../../services/repositories/dropdown/DropdownInfoRepository";
import { SpecIdInfoService } from "../../../../../services/remotes/dropdown/dropdown";
import { specDTO } from "../../../../../services/repositories/dropdown/dto";
import { useEffect, useState } from "react";
import { OptionType } from "../../../../Register/dropdownList";

export default function useAnnualPayment() {
	const SpecIdDropdown = new SpecIDInfoRepository(new SpecIdInfoService());
	const [SpecDropdown, setSpecDropdown] = useState<specDTO[]>();

	const mappedSpecDropdown: OptionType<number, number>[] = SpecDropdown
		? SpecDropdown.map((item: specDTO) => ({
				label: item.annual_payment_periods,
				value: item.spec_id,
		  })).sort((a, b) => a.label - b.label)
		: [];

	useEffect(() => {
		SpecIdDropdown.getSpecIDInfo().then(setSpecDropdown);
	}, []);

	function getAnnualPayment(specID: number) {
		const payment = mappedSpecDropdown.find((id) => id.value === specID);
		return payment?.label;
	}

	return { getAnnualPayment };
}
/* eslint-enable */
