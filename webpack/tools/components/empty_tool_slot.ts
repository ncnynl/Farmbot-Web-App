import { TaggedToolSlotPointer, SpecialStatus } from "farmbot";

export function emptyToolSlot(): TaggedToolSlotPointer {
  return {
    uuid: "ERROR: GENERATED BY REDUCER - SHOULD BE UNSEEN",
    kind: "Point",
    specialStatus: SpecialStatus.SAVED,
    body: {
      x: 0,
      y: 0,
      z: 0,
      radius: 25,
      pointer_type: "ToolSlot",
      meta: {},
      tool_id: undefined,
      name: "Tool Slot",
      pullout_direction: 0
    }
  };
}