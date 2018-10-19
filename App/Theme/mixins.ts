const fluidContainer: any = {
    width: '100%',
    height: '100%'
}
const flexContainer: any = { flex: 1 }
const centeredText: any = {
    textAlignVertical: "center",
    textAlign: "center",
}
const centeredFlexContainer: any = {
    justifyContent: 'center',
    alignItems: 'center',
}
const fullWidthCenterAlignedFlexContainer: any = {
    ...flexContainer,
    ...centeredFlexContainer
}
const fullScreenAbsoluteContainer: any = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
}

export default {
    fluidContainer,
    flexContainer,
    centeredText,
    centeredFlexContainer,
    fullWidthCenterAlignedFlexContainer,
    fullScreenAbsoluteContainer
}