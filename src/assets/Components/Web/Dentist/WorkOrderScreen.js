import React from 'react';
 // mui 
import {Button} from '@mui/material';
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from '@material-ui/core/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TransitionProps} from "@mui/material/transitions";
 // components
import PreviewRequestList from './PreviewRequestList';
import ViewRequest from './ViewRequest';
// img 
import DropDown3 from '../../../img/DropDown.svg'; 
 

// varibles
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return < Collapse direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
    root: {
        [`& fieldset`]: {
            borderRadius: '5px',
            width: '40px',
            height: '25px',
            textAlign: 'center',
            fontSize: '7px',
            fontWeight: 'bold',
            paddingBottom: '6.2px',
            alignContent: 'center',
            alignItems: 'center',
        },
        "& .MuiStepIcon-active": {color: "red"},
        "& .MuiStepIcon-completed": {color: "green"},
        "& .Mui-disabled .MuiStepIcon-root": {color: "cyan"}
    }
}));


export default function WorkOrderScreen() {
    //show request list
    const [ReqAdd, setReqAdd] = React.useState(false);
    //-------------Functions states-----------------
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [expanded6, setExpanded6] = React.useState(false);
    const classes = useStyles();
    const [teeth, setTeeth] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [isForcePickerOpen, setIsOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [value, setValue] = React.useState(0);
    const [treatment, settreatment] = React.useState(false);
    const [design, setDesign] = React.useState(false);
    const [Material, setMaterial] = React.useState(false);
    const [MaterialAbt, setMaterialAbt] = React.useState(false);
    const [Prostheticcolor, setProstheticcolor] = React.useState(false);
    const [ColorBase, setColorBase] = React.useState(false);
    const [filesToUpload, setFilesToUpload] = React.useState([])
    const [Dr, setDr] = React.useState('');


    //-------------implant State---------------
    //up
    const [imUr1, setImUr1] = React.useState(false);
    const [imUr2, setImUr2] = React.useState(false);
    const [imUr3, setImUr3] = React.useState(false);
    const [imUr4, setImUr4] = React.useState(false);
    const [imUr5, setImUr5] = React.useState(false);
    const [imUr6, setImUr6] = React.useState(false);
    const [imUr7, setImUr7] = React.useState(false);
    const [imUr8, setImUr8] = React.useState(false);
    const [imUL1, setImUL1] = React.useState(false);
    const [imUL2, setImUL2] = React.useState(false);
    const [imUL3, setImUL3] = React.useState(false);
    const [imUL4, setImUL4] = React.useState(false);
    const [imUL5, setImUL5] = React.useState(false);
    const [imUL6, setImUL6] = React.useState(false);
    const [imUL7, setImUL7] = React.useState(false);
    const [imUL8, setImUL8] = React.useState(false);
    //Down
    const [imLr1, setImLr1] = React.useState(false);
    const [imLr2, setImLr2] = React.useState(false);
    const [imLr3, setImLr3] = React.useState(false);
    const [imLr4, setImLr4] = React.useState(false);
    const [imLr5, setImLr5] = React.useState(false);
    const [imLr6, setImLr6] = React.useState(false);
    const [imLr7, setImLr7] = React.useState(false);
    const [imLr8, setImLr8] = React.useState(false);
    const [imLL1, setImLL1] = React.useState(false);
    const [imLL2, setImLL2] = React.useState(false);
    const [imLL3, setImLL3] = React.useState(false);
    const [imLL4, setImLL4] = React.useState(false);
    const [imLL5, setImLL5] = React.useState(false);
    const [imLL6, setImLL6] = React.useState(false);
    const [imLL7, setImLL7] = React.useState(false);
    const [imLL8, setImLL8] = React.useState(false);

    //--------------Bridge state---------
    //up
    const [Br1, setBr1] = React.useState(false);
    const [Br2, setBr2] = React.useState(false);
    const [Br3, setBr3] = React.useState(false);
    const [Br4, setBr4] = React.useState(false);
    const [Br5, setBr5] = React.useState(false);
    const [Br6, setBr6] = React.useState(false);
    const [Br7, setBr7] = React.useState(false);
    const [Br8, setBr8] = React.useState(false);
    const [Br9, setBr9] = React.useState(false);
    const [Br10, setBr10] = React.useState(false);
    const [Br11, setBr11] = React.useState(false);
    const [Br12, setBr12] = React.useState(false);
    const [Br13, setBr13] = React.useState(false);
    const [Br14, setBr14] = React.useState(false);
    const [Br15, setBr15] = React.useState(false);
    //down
    const [Br16, setBr16] = React.useState(false);
    const [Br17, setBr17] = React.useState(false);
    const [Br18, setBr18] = React.useState(false);
    const [Br19, setBr19] = React.useState(false);
    const [Br20, setBr20] = React.useState(false);
    const [Br21, setBr21] = React.useState(false);
    const [Br22, setBr22] = React.useState(false);
    const [Br23, setBr23] = React.useState(false);
    const [Br24, setBr24] = React.useState(false);
    const [Br25, setBr25] = React.useState(false);
    const [Br26, setBr26] = React.useState(false);
    const [Br27, setBr27] = React.useState(false);
    const [Br28, setBr28] = React.useState(false);
    const [Br29, setBr29] = React.useState(false);
    const [Br30, setBr30] = React.useState(false);

    //-----------------menu state -------------------------
    const [menuTreeatment, setMenuTreeatment] = React.useState(false);
    const [MateriaTeeth, setMateriaTeeth] = React.useState(false);
    const [MateriaAbatment, setMateriaAbatment] = React.useState(false);
    const [ProtezColor, setProtezColor] = React.useState(false);
    const [BaseColor, setBaseColor] = React.useState(false);
    //Design State
    const [FullContour, setFullContour] = React.useState(false);
    const [Veneered, setVeneered] = React.useState(false);
    const [ScrawRetained, setScrawRetained] = React.useState(false);
    const [Cemented, setCemented] = React.useState(false);
    const [SmileDesign, setSmileDesign] = React.useState(false);
    const [Customizeabutment, setCustomizeabutment] = React.useState(false);
    const [SurgicalGuide, setSurgicalGuide] = React.useState(false);
    const [GumliftingGuide, setGumliftingGuide] = React.useState(false);
    const [Frame, setFrame] = React.useState(false);
    const [NightGurd, setNightGurd] = React.useState(false);
    const [Postt, setPostt] = React.useState(false);
    const [Hybridabutment, setHybridabutment] = React.useState(false);
    const [Bridge, setBridge] = React.useState(false);
    const [Othertypes, setOthertypes] = React.useState(false);
    const [Implant, setImplant] = React.useState(false);
    // treeatment State
    const [Crown, setCrown] = React.useState(false);
    const [Inlay, setInlay] = React.useState(false);
    const [ImplantBrands, setImplantBrands] = React.useState(false);
    const [Veneer, setVeneer] = React.useState(false);
    const [Onlay, setOnlay] = React.useState(false);
    const [Pontic, setPontic] = React.useState(false);
    const [Missing, setMissing] = React.useState(false);
    const [D3printing, set3Dprinting] = React.useState(false);
    const [Vacume, setVacume] = React.useState(false);
    const [Design3dPrinting, setDesign3dPrinting] = React.useState(false);
    const [Justdesign, setJustdesign] = React.useState(false);
    // material teeth state
    const [ZirconiumOxide, setZirconiumOxide] = React.useState(false);
    const [GlassCeramic, setGlassCeramic] = React.useState(false);
    const [PMMA, setPMMA] = React.useState(false);
    const [Composite, setComposite] = React.useState(false);
    const [LithiumDislioate, setLithiumDislioate] = React.useState(false);
    const [NonPreciousMetal, setNonPreciousMetal] = React.useState(false);
    const [PreciousMetal, setPreciousMetal] = React.useState(false);
    const [Titanium, setitanium] = React.useState(false);
    //abutment
    const [ZirconiumOxideabt, setZirconiumOxideabt] = React.useState(false);
    const [Titaniumabt, setitaniumabt] = React.useState(false);
    // -----------color teeth ------------------
    const [colorUR1, setColorUR1] = React.useState('#D2D9F8');
    const [colorUR2, setColorUR2] = React.useState('#D2D9F8');
    const [colorUR3, setColorUR3] = React.useState('#D2D9F8');
    const [colorUR4, setColorUR4] = React.useState('#D2D9F8');
    const [colorUR5, setColorUR5] = React.useState('#D2D9F8');
    const [colorUR6, setColorUR6] = React.useState('#D2D9F8');
    const [colorUR7, setColorUR7] = React.useState('#D2D9F8');
    const [colorUR8, setColorUR8] = React.useState('#D2D9F8');
    const [colorUL1, setColorUL1] = React.useState('#D2D9F8');
    const [colorUL2, setColorUL2] = React.useState('#D2D9F8');
    const [colorUL3, setColorUL3] = React.useState('#D2D9F8');
    const [colorUL4, setColorUL4] = React.useState('#D2D9F8');
    const [colorUL5, setColorUL5] = React.useState('#D2D9F8');
    const [colorUL6, setColorUL6] = React.useState('#D2D9F8');
    const [colorUL7, setColorUL7] = React.useState('#D2D9F8');
    const [colorUL8, setColorUL8] = React.useState('#D2D9F8');
    const [colorLR1, setColorLR1] = React.useState('#D2D9F8');
    const [colorLR2, setColorLR2] = React.useState('#D2D9F8');
    const [colorLR3, setColorLR3] = React.useState('#D2D9F8');
    const [colorLR4, setColorLR4] = React.useState('#D2D9F8');
    const [colorLR5, setColorLR5] = React.useState('#D2D9F8');
    const [colorLR6, setColorLR6] = React.useState('#D2D9F8');
    const [colorLR7, setColorLR7] = React.useState('#D2D9F8');
    const [colorLR8, setColorLR8] = React.useState('#D2D9F8');
    const [colorLL1, setColorLL1] = React.useState('#D2D9F8');
    const [colorLL2, setColorLL2] = React.useState('#D2D9F8');
    const [colorLL3, setColorLL3] = React.useState('#D2D9F8');
    const [colorLL4, setColorLL4] = React.useState('#D2D9F8');
    const [colorLL5, setColorLL5] = React.useState('#D2D9F8');
    const [colorLL6, setColorLL6] = React.useState('#D2D9F8');
    const [colorLL7, setColorLL7] = React.useState('#D2D9F8');
    const [colorLL8, setColorLL8] = React.useState('#D2D9F8');
    const [TeethIDD, setTeethIDD] = React.useState('#D2D9F8');

    //--------------Functions-----------------------

    const DRhandleChange = (event) => {
        setDr(event.target.value);
    };


    const handleAdd = (value) => {


        const filtered = teeth.filter(obj => {
            return obj === value.target.id;
        });
        if (!filtered.includes(value.target.id)) {
            setTeeth(current => [...current, value.target.id]);
            setTeethIDD([value.target.id])
        } else {
            alert('دندان مورد نظر انتخاب شده است');
        }
        console.log(teeth);

    };


    const hadleCrown = (teeatment) => {
        setCrown((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Crown') {
            setColorLR8('#810b62');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Crown') {
            setColorLR7('#810b62');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Crown') {
            setColorLR6('#810b62');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Crown') {
            setColorLR5('#810b62');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Crown') {
            setColorLR4('#810b62');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Crown') {
            setColorLR3('#810b62');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Crown') {
            setColorLR2('#810b62');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Crown') {
            setColorLR8('#810b62');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Crown') {
            setColorLL8('#810b62');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Crown') {
            setColorLL7('#810b62');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Crown') {
            setColorLL6('#810b62');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Crown') {
            setColorLL5('#810b62');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Crown') {
            setColorLL4('#810b62');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Crown') {
            setColorLL3('#810b62');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Crown') {
            setColorLL2('#810b62');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Crown') {
            setColorLL1('#810b62');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Crown') {
            setColorUR8('#810b62');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Crown') {
            setColorUR7('#810b62');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Crown') {
            setColorUR6('#810b62');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Crown') {
            setColorUR5('#810b62');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Crown') {
            setColorUR4('#810b62');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Crown') {
            setColorUR3('#810b62');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Crown') {
            setColorUR2('#810b62');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Crown') {
            setColorUR1('#810b62');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Crown') {
            setColorUL8('#810b62');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Crown') {
            setColorUL7('#810b62');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Crown') {
            setColorUL6('#810b62');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Crown') {
            setColorUL5('#810b62');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Crown') {
            setColorUL4('#810b62');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Crown') {
            setColorUL3('#810b62');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Crown') {
            setColorUL2('#810b62');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Crown') {
            setColorUL1('#810b62');
        }

    }


    const hadlepontic = (teeatment) => {
        setPontic((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Pontic') {
            setColorLR8('#641d1d');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Pontic') {
            setColorLR7('#641d1d');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Pontic') {
            setColorLR6('#641d1d');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Pontic') {
            setColorLR5('#641d1d');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Pontic') {
            setColorLR4('#641d1d');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Pontic') {
            setColorLR3('#641d1d');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Pontic') {
            setColorLR2('#641d1d');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Pontic') {
            setColorLR8('#641d1d');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Pontic') {
            setColorLL8('#641d1d');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Pontic') {
            setColorLL7('#641d1d');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Pontic') {
            setColorLL6('#641d1d');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Pontic') {
            setColorLL5('#641d1d');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Pontic') {
            setColorLL4('#641d1d');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Pontic') {
            setColorLL3('#641d1d');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Pontic') {
            setColorLL2('#641d1d');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Pontic') {
            setColorLL1('#641d1d');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Pontic') {
            setColorUR8('#641d1d');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Pontic') {
            setColorUR7('#641d1d');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Pontic') {
            setColorUR6('#641d1d');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Pontic') {
            setColorUR5('#641d1d');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Pontic') {
            setColorUR4('#641d1d');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Pontic') {
            setColorUR3('#641d1d');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Pontic') {
            setColorUR2('#641d1d');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Pontic') {
            setColorUR1('#641d1d');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Pontic') {
            setColorUL8('#641d1d');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Pontic') {
            setColorUL7('#641d1d');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Pontic') {
            setColorUL6('#641d1d');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Pontic') {
            setColorUL5('#641d1d');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Pontic') {
            setColorUL4('#641d1d');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Pontic') {
            setColorUL3('#641d1d');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Pontic') {
            setColorUL2('#641d1d');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Pontic') {
            setColorUL1('#810b62');
        }

    }


    const hadleInlay = (teeatment) => {
        setInlay((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Inlay') {
            setColorLR8('#62A565');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Inlay') {
            setColorLR7('#62A565');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Inlay') {
            setColorLR6('#62A565');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Inlay') {
            setColorLR5('#62A565');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Inlay') {
            setColorLR4('#62A565');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Inlay') {
            setColorLR3('#62A565');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Inlay') {
            setColorLR2('#62A565');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Inlay') {
            setColorLR8('#62A565');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Inlay') {
            setColorLL8('#62A565');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Inlay') {
            setColorLL7('#62A565');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Inlay') {
            setColorLL6('#62A565');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Inlay') {
            setColorLL5('#62A565');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Inlay') {
            setColorLL4('#62A565');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Inlay') {
            setColorLL3('#62A565');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Inlay') {
            setColorLL2('#62A565');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Inlay') {
            setColorLL1('#62A565');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Inlay') {
            setColorUR8('#62A565');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Inlay') {
            setColorUR7('#62A565');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Inlay') {
            setColorUR6('#62A565');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Inlay') {
            setColorUR5('#62A565');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Inlay') {
            setColorUR4('#62A565');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Inlay') {
            setColorUR3('#62A565');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Inlay') {
            setColorUR2('#62A565');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Inlay') {
            setColorUR1('#62A565');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Inlay') {
            setColorUL8('#62A565');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Inlay') {
            setColorUL7('#62A565');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Inlay') {
            setColorUL6('#62A565');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Inlay') {
            setColorUL5('#62A565');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Inlay') {
            setColorUL4('#62A565');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Inlay') {
            setColorUL3('#62A565');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Inlay') {
            setColorUL2('#62A565');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Inlay') {
            setColorUL1('#62A565');
        }

    }


    const hadleOnlay = (teeatment) => {
        setOnlay((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Onlay') {
            setColorLR8('#3DD643');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Onlay') {
            setColorLR7('#3DD643');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Onlay') {
            setColorLR6('#3DD643');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Onlay') {
            setColorLR5('#3DD643');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Onlay') {
            setColorLR4('#3DD643');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Onlay') {
            setColorLR3('#3DD643');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Onlay') {
            setColorLR2('#3DD643');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Onlay') {
            setColorLR8('#3DD643');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Onlay') {
            setColorLL8('#3DD643');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Onlay') {
            setColorLL7('#3DD643');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Onlay') {
            setColorLL6('#3DD643');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Onlay') {
            setColorLL5('#3DD643');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Onlay') {
            setColorLL4('#3DD643');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Onlay') {
            setColorLL3('#3DD643');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Onlay') {
            setColorLL2('#3DD643');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Onlay') {
            setColorLL1('#3DD643');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Onlay') {
            setColorUR8('#3DD643');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Onlay') {
            setColorUR7('#3DD643');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Onlay') {
            setColorUR6('#3DD643');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Onlay') {
            setColorUR5('#3DD643');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Onlay') {
            setColorUR4('#3DD643');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Onlay') {
            setColorUR3('#3DD643');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Onlay') {
            setColorUR2('#3DD643');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Onlay') {
            setColorUR1('#3DD643');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Onlay') {
            setColorUL8('#3DD643');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Onlay') {
            setColorUL7('#3DD643');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Onlay') {
            setColorUL6('#3DD643');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Onlay') {
            setColorUL5('#3DD643');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Onlay') {
            setColorUL4('#3DD643');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Onlay') {
            setColorUL3('#3DD643');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Onlay') {
            setColorUL2('#3DD643');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Onlay') {
            setColorUL1('#3DD643');
        }

    }


    const handleVeneerd = (teeatment) => {
        setVeneer((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Veneer') {
            setColorLR8('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Veneer') {
            setColorLR7('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Veneer') {
            setColorLR6('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Veneer') {
            setColorLR5('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Veneer') {
            setColorLR4('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Veneer') {
            setColorLR3('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Veneer') {
            setColorLR2('#0FBBB1');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Veneer') {
            setColorLR8('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Veneer') {
            setColorLL8('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Veneer') {
            setColorLL7('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Veneer') {
            setColorLL6('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Veneer') {
            setColorLL5('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Veneer') {
            setColorLL4('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Veneer') {
            setColorLL3('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Veneer') {
            setColorLL2('#0FBBB1');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Veneer') {
            setColorLL1('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Veneer') {
            setColorUR8('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Veneer') {
            setColorUR7('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Veneer') {
            setColorUR6('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Veneer') {
            setColorUR5('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Veneer') {
            setColorUR4('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Veneer') {
            setColorUR3('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Veneer') {
            setColorUR2('#0FBBB1');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Veneer') {
            setColorUR1('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Veneer') {
            setColorUL8('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Veneer') {
            setColorUL7('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Veneer') {
            setColorUL6('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Veneer') {
            setColorUL5('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Veneer') {
            setColorUL4('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Veneer') {
            setColorUL3('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Veneer') {
            setColorUL2('#0FBBB1');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Veneer') {
            setColorUL1('#0FBBB1');
        }

    }

    const handleMissing = (teeatment) => {
        setMissing((prev) => !prev);
        if (TeethIDD[0] === 'LR8' && teeatment === 'Missing') {
            setColorLR8('#Red');
        }
        if (TeethIDD[0] === 'LR7' && teeatment === 'Missing') {
            setColorLR7('#Red');
        }
        if (TeethIDD[0] === 'LR6' && teeatment === 'Missing') {
            setColorLR6('#Red');
        }
        if (TeethIDD[0] === 'LR5' && teeatment === 'Missing') {
            setColorLR5('#Red');
        }
        if (TeethIDD[0] === 'LR4' && teeatment === 'Missing') {
            setColorLR4('#Red');
        }
        if (TeethIDD[0] === 'LR3' && teeatment === 'Missing') {
            setColorLR3('#Red');
        }
        if (TeethIDD[0] === 'LR2' && teeatment === 'Missing') {
            setColorLR2('#Red');
        }
        if (TeethIDD[0] === 'LR1' && teeatment === 'Missing') {
            setColorLR8('#Red');
        }
        if (TeethIDD[0] === 'LL8' && teeatment === 'Missing') {
            setColorLL8('#Red');
        }
        if (TeethIDD[0] === 'LL7' && teeatment === 'Missing') {
            setColorLL7('#Red');
        }
        if (TeethIDD[0] === 'LL6' && teeatment === 'Missing') {
            setColorLL6('#Red');
        }
        if (TeethIDD[0] === 'LL5' && teeatment === 'Missing') {
            setColorLL5('#Red');
        }
        if (TeethIDD[0] === 'LL4' && teeatment === 'Missing') {
            setColorLL4('#Red');
        }
        if (TeethIDD[0] === 'LL3' && teeatment === 'Missing') {
            setColorLL3('#Red');
        }
        if (TeethIDD[0] === 'LL2' && teeatment === 'Missing') {
            setColorLL2('#Red');
        }
        if (TeethIDD[0] === 'LL1' && teeatment === 'Missing') {
            setColorLL1('#Red');
        }
        if (TeethIDD[0] === 'UR8' && teeatment === 'Missing') {
            setColorUR8('#Red');
        }
        if (TeethIDD[0] === 'UR7' && teeatment === 'Missing') {
            setColorUR7('#Red');
        }
        if (TeethIDD[0] === 'UR6' && teeatment === 'Missing') {
            setColorUR6('#Red');
        }
        if (TeethIDD[0] === 'UR5' && teeatment === 'Missing') {
            setColorUR5('#Red');
        }
        if (TeethIDD[0] === 'UR4' && teeatment === 'Missing') {
            setColorUR4('#Red');
        }
        if (TeethIDD[0] === 'UR3' && teeatment === 'Missing') {
            setColorUR3('#Red');
        }
        if (TeethIDD[0] === 'UR2' && teeatment === 'Missing') {
            setColorUR2('#Red');
        }
        if (TeethIDD[0] === 'UR1' && teeatment === 'Missing') {
            setColorUR1('#Red');
        }
        if (TeethIDD[0] === 'UL8' && teeatment === 'Missing') {
            setColorUL8('#Red');
        }
        if (TeethIDD[0] === 'UL7' && teeatment === 'Missing') {
            setColorUL7('#Red');
        }
        if (TeethIDD[0] === 'UL6' && teeatment === 'Missing') {
            setColorUL6('#Red');
        }
        if (TeethIDD[0] === 'UL5' && teeatment === 'Missing') {
            setColorUL5('#Red');
        }
        if (TeethIDD[0] === 'UL4' && teeatment === 'Missing') {
            setColorUL4('Red');
        }
        if (TeethIDD[0] === 'UL3' && teeatment === 'Missing') {
            setColorUL3('Red');
        }
        if (TeethIDD[0] === 'UL2' && teeatment === 'Missing') {
            setColorUL2('Red');
        }
        if (TeethIDD[0] === 'UL1' && teeatment === 'Missing') {
            setColorUL1('Red');
        }

    }


    const handleChangeTeeth = (onChangeValue, i) => {
        const inputdata = [...teeth];
        inputdata[i] = onChangeValue.target.value;
        setTeeth(inputdata);
    }

    const handleDeleteTeeth = (i) => {
        const deleteTeeth = [...teeth];
        console.log(i)
        console.log(deleteTeeth)

        deleteTeeth.splice(i, 1);
        setTeeth(deleteTeeth);

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFilesChange = (files) => {
        // Update chosen files
        setFilesToUpload([...files])
    };
    const uploadFiles = () => {
        // Create a form and post it to server
        let formData = new FormData()
        filesToUpload.forEach((file) => formData.append("files", file))

        fetch("/file/upload", {
            method: "POST",
            body: formData
        })
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const treatmentHandle = () => {
        settreatment((prev) => !prev);
    };

    const designHandle = () => {
        setDesign((prev) => !prev);
    };

    const MaterialHandle = () => {
        setMaterial((prev) => !prev);
    };
    const MaterialHandleAbt = () => {
        setMaterialAbt((prev) => !prev);
    };
    const ProstheticcolorHandle = () => {
        setProstheticcolor((prev) => !prev);
    };

    const ColorBaseHandle = () => {
        setColorBase((prev) => !prev);
    };


    return (
        <>
            {ReqAdd ?
                <PreviewRequestList Bridge={Bridge}/>
                :
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginLeft: 40,
                    marginRight: 39,
                    maxWidth:'1410px'
                }}>
                    <div style={{paddingLeft: '56px'}}>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <div style={{
                                lineHeight: 0
                                , width: 252
                                , marginTop: 10
                                , borderRadius: 4

                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginBottom: '24px'
                                }}>
                                    <p style={{fontWeight: 'bold', fontSize: '20px', marginTop: '24px'}}>نوع طراحی</p>

                                </div>

                                <div onClick={() => setExpanded1(!expanded1)} style={{
                                    height: '48px',
                                    border: '1px solid #B1B1B1',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <p style={{fontWeight: 'bold', paddingRight: 18}} checked={design}
                                       onClick={designHandle}> انتخاب کنید</p>
                                    <img src={DropDown3} checked={design} onClick={designHandle}
                                         style={{color: '#B1B1B1', width: 16, marginLeft: 20}}/>
                                </div>
                                <Collapse in={expanded1}>
                                    <div style={{
                                        width: 252,
                                        height: 'fit-content',
                                        alignItems: 'end',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'end'
                                    }}>
                                        <FormGroup dir="rtl" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'end'
                                        }}>
                                            <div style={{
                                                textAlign: 'end',
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'end'
                                            }}>
                                                <FormControlLabel onClick={() => setFrame((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Frame"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setNightGurd((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Night Gurd"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setPostt((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Post"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setBridge((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Bridge"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setOthertypes((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Other types"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setImplant((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Implant"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setFullContour((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Full Contour"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setVeneered((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Veneered"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setSmileDesign((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Smile Design"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setSurgicalGuide((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Surgical Guide"
                                                                  labelPlacement="start"/>
                                                <FormControlLabel onClick={() => setGumliftingGuide((prev) => !prev)}
                                                                  control={< CheckBox/>} label="Gum lifting Guide"
                                                                  labelPlacement="start"/>

                                            </div>

                                        </FormGroup>
                                    </div>
                                </Collapse>
                            </div>


                            <div style={{
                                lineHeight: 0
                                , marginTop: 10
                                , width: 252
                                , borderRadius: 4
                                , marginRight: '24px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginBottom: '24px'
                                }}>
                                    <p style={{fontWeight: 'bold', fontSize: '20px', marginTop: '24px'}}>نوع درمان</p>
                                </div>

                                <div onClick={() => setExpanded2(!expanded2)} style={{
                                    border: '1px solid #B1B1B1',
                                    borderRadius: '4px',
                                    height: '48px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={treatment}
                                        onClick={treatmentHandle}>انتخاب کنید</h5>
                                    <img src={DropDown3} checked={treatment} onClick={treatmentHandle}
                                         style={{width: 16, marginLeft: 20}}/>
                                </div>
                                <Collapse in={expanded2}>
                                    <div style={{
                                        width: 296,
                                        height: 'fit-content',
                                        alignItems: 'end',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start'
                                    }}>
                                        <FormGroup dir="rtl" style={{
                                            displa: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'start'
                                        }}>
                                            <div style={{
                                                textAlign: 'end',
                                                marginLeft: '20px',
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'start'
                                            }}>
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox onClick={() => handleVeneerd('Veneer')}/>}
                                                    label="Veneer" labelPlacement="start"/> : ''}
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox onClick={() => hadleOnlay('Onlay')}/>}
                                                    label="Onlay" labelPlacement="start"/> : ''}
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox name='Pontic'
                                                                        onClick={() => hadlepontic('Pontic')}/>}
                                                    label="Pontic" labelPlacement="start"/> : ''}
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox onClick={() => handleMissing('Missing')}/>}
                                                    label="Missing" labelPlacement="start"/> : ''}
                                                {NightGurd ? <FormControlLabel control={< CheckBox
                                                    onClick={() => set3Dprinting((prev) => !prev)}/>}
                                                                               label="3D printing"
                                                                               labelPlacement="start"/> : ''}
                                                {NightGurd ? <FormControlLabel
                                                    control={< CheckBox onClick={() => setVacume((prev) => !prev)}/>}
                                                    label="Vacume" labelPlacement="start"/> : ''}
                                                {SmileDesign || SurgicalGuide || GumliftingGuide ?
                                                    <FormControlLabel control={< CheckBox/>} label="Design &D printing "
                                                                      labelPlacement="start"/> : ''}
                                                {SmileDesign || SurgicalGuide || GumliftingGuide ?
                                                    <FormControlLabel control={< CheckBox/>} label="Just design"
                                                                      labelPlacement="start"/> : ''}
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox onClick={() => hadleCrown('Crown')}/>}
                                                    label="Crown" labelPlacement="start"/> : ''}
                                                {FullContour || Frame ? <FormControlLabel
                                                    control={< CheckBox onClick={() => hadleInlay('Inlay')}/>}
                                                    label="Inlay" labelPlacement="start"/> : ''}
                                                {Implant ?
                                                    <FormControlLabel onClick={() => setHybridabutment((prev) => !prev)}
                                                                      control={< CheckBox/>} label="Hybrid abutment"
                                                                      labelPlacement="start"/> : ''}
                                                {Implant ?
                                                    <FormControlLabel onClick={() => setScrawRetained((prev) => !prev)}
                                                                      control={< CheckBox/>} label="Scraw Retained"
                                                                      labelPlacement="start"/> : ''}
                                                {Implant ?
                                                    <FormControlLabel onClick={() => setCemented((prev) => !prev)}
                                                                      control={< CheckBox/>} label="Cemented"
                                                                      labelPlacement="start"/> : ''}
                                                {Implant ? <FormControlLabel
                                                    onClick={() => setCustomizeabutment((prev) => !prev)}
                                                    control={< CheckBox/>} label="Customize abutment "
                                                    labelPlacement="start"/> : ''}

                                            </div>

                                        </FormGroup>
                                    </div>
                                </Collapse>

                            </div>

                            {Crown || Veneer || Onlay || Pontic || Missing || Inlay || Hybridabutment || ScrawRetained ||
                            Cemented || ZirconiumOxide || Titanium ? <div style={{
                                lineHeight: 0
                                , width: 252
                                , marginTop: 10
                                , borderRadius: 4
                                , marginRight: '24px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginBottom: '24px'
                                }}>
                                    <p style={{fontWeight: 'bold', fontSize: '20px', marginTop: '24px'}}> متریال
                                        دندان</p>

                                </div>

                                <div onClick={() => setExpanded3(!expanded3)} style={{
                                    border: '1px solid #B1B1B1',
                                    borderRadius: '4px',
                                    height: '48px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Material}
                                        onClick={MaterialHandle}>انتخاب کنید</h5>
                                    <img src={DropDown3} checked={Material} onClick={MaterialHandle}
                                         style={{width: 16, marginLeft: 20}}/>
                                </div>
                                <Collapse in={expanded3}>
                                    <div style={{
                                        textAlign: 'start',
                                        width: 296,
                                        height: 'fit-content',
                                        alignItems: 'end',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start'
                                    }}>
                                        <FormGroup dir="rtl" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'end'
                                        }}>
                                            <div style={{
                                                marginLeft: 20,
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'start'
                                            }}>
                                                {Crown || Veneer || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Zirconium Oxide"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Veneer || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Glass Ceramic"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Veneer || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="PMMA"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Veneer || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Composite"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Veneer || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Lithium Dislioate"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Non-Precious Metal"
                                                                      labelPlacement="start"/> : ''}
                                                {Crown || Onlay || Pontic || Missing || Inlay ?
                                                    <FormControlLabel control={< CheckBox/>} label="Precious Metal"
                                                                      labelPlacement="start"/> : ''}
                                                <FormControlLabel control={< CheckBox/>} label="Titanium"
                                                                  labelPlacement="start"/>
                                            </div>

                                        </FormGroup>
                                    </div>
                                </Collapse>
                            </div> : ''}


                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {Customizeabutment ? <div style={{
                                lineHeight: 0
                                , width: 252
                                , marginTop: 10
                                , borderRadius: 12

                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginBottom: '24px'
                                }}>
                                    <p style={{fontWeight: 'bold', fontSize: '20px', marginTop: '24px'}}>مترال
                                        ابانتمنت </p>

                                </div>

                                <div onClick={() => setExpanded4(!expanded4)} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '48px',
                                    border: '1px solid #B1B1B1',
                                    borderRadius: '4px',
                                    justifyContent: 'space-between'
                                }}>
                                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Material}
                                        onClick={MaterialHandleAbt}>انتخاب کنید</h5>
                                    <img src={DropDown3} checked={MaterialAbt} onClick={MaterialHandleAbt}
                                         style={{width: 16, marginLeft: 20}}/>
                                </div>
                                <Collapse in={expanded4}>
                                    <div style={{
                                        textAlign: 'end',
                                        width: 296,
                                        height: 'fit-content',
                                        alignItems: 'end',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start'
                                    }}>
                                        <FormGroup dir="rtl" style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'end'
                                        }}>
                                            <div style={{
                                                marginLeft: '20px',
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'start'
                                            }}>
                                                {MaterialAbt ? <FormControlLabel control={< CheckBox
                                                    onClick={() => setZirconiumOxideabt((prev) => !prev)}/>}
                                                                                 label="Zirconium Oxide"
                                                                                 labelPlacement="start"/> : ''}
                                                {MaterialAbt ? <FormControlLabel control={< CheckBox
                                                    onClick={() => setitaniumabt((prev) => !prev)}/>} label="Titanium"
                                                                                 labelPlacement="start"/> : ''}
                                            </div>

                                        </FormGroup>
                                    </div>
                                </Collapse>
                            </div> : ''}


                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {Postt || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
                            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal
                                ? <div style={{
                                    lineHeight: 0
                                    , width: 390
                                    , marginTop: '48px'
                                    , borderRadius: 4
                                    , display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end'
                                }}>
                                    <div style={{
                                        width: 'inherit',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start'
                                    }}>
                                        <p style={{fontWeight: 'bold', fontSize: '24px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>رنگ پروتز</p>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>دسته</p>
                                    </div>
                                    <div onClick={() => setExpanded5(!expanded5)} style={{
                                        width: '390px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '48px',
                                        border: '1px solid #B1B1B1',
                                        borderRadius: '4px',
                                        justifyContent: 'space-between'
                                    }}>
                                        <p style={{fontWeight: 'bold', paddingRight: 18}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>انتخاب کنید</p>
                                        <img src={DropDown3} checked={Prostheticcolor} onClick={ProstheticcolorHandle}
                                             style={{width: 16, marginLeft: 20}}/>
                                    </div>
                                    <Collapse in={expanded5}>
                                        <div style={{
                                            width: 296,
                                            height: 'fit-content',
                                            alignItems: 'end',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start'
                                        }}>

                                            <div style={{display: 'flex', paddingBottom: 5, flexDirection: 'column'}}>
                                                <div style={{
                                                    marginTop: 2,
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'flex-start'
                                                }}>
                                                    <FormGroup dir="rtl" style={{
                                                        marginLeft: -3,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'end'
                                                    }}>
                                                        <div style={{
                                                            width: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'start'
                                                        }}>
                                                            <FormControlLabel control={< CheckBox/>}
                                                                              label="VITA Classic"
                                                                              labelPlacement="start"/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D1' readonly/>

                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D3' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B4' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C4' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A4' readonly/>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    marginLeft: -20,
                                                    marginTop: 2,
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'flex-start'
                                                }}>
                                                    <FormGroup dir="rtl" style={{
                                                        displa: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'end'
                                                    }}>
                                                        <div style={{
                                                            width: '100%',
                                                            displa: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'start'
                                                        }}>
                                                            <FormControlLabel control={< CheckBox/>}
                                                                              label="VITA 3D master"
                                                                              labelPlacement="start"/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='1M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M1' readonly/>

                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='1M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2L 2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3L 2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4L2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM3' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='.' readonly hidden/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M3' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='A3.5' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='B4' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M2' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='2M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M2' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='2M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='A4' readonly/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ Collapse>
                                </div> : ''}


                            {Postt || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
                            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal ?
                                <div style={{
                                    lineHeight: 0
                                    , width: 390
                                    , padding: 1
                                    , marginTop: '71px'
                                    , borderRadius: 4
                                    , display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end'
                                }}>
                                    <div style={{
                                        width: 'inherit',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        height: '48px'
                                    }}>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>نوع رنگ</p>
                                    </div>
                                    <div onClick={() => setExpanded6(!expanded6)} style={{
                                        width: '390px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '48px',
                                        border: '1px solid #B1B1B1',
                                        borderRadius: '4px',
                                        justifyContent: 'space-between'
                                    }}>
                                        <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={ColorBase}
                                            onClick={ProstheticcolorHandle}>انتخاب کنید</h5>
                                        <img src={DropDown3} checked={ColorBase} onClick={ColorBaseHandle}
                                             style={{width: 16, marginLeft: 20}}/>
                                    </div>
                                    < Collapse in={expanded6}>
                                        <div style={{
                                            width: 296,
                                            height: 'fit-content',
                                            alignItems: 'end',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start'
                                        }}>

                                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                                <div style={{
                                                    display: 'flex',
                                                    paddingBottom: 1,
                                                    flexDirection: 'column'
                                                }}>
                                                    <div style={{
                                                        marginTop: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            marginLeft: -20,
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                width: '100%',
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'start'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="VITA Classic"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'space-between'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D1' readonly/>

                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D3' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B4' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C4' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A4' readonly/>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        marginLeft: -20,
                                                        marginTop: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                width: '100%',
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'start'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="VITA 3D master"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'space-between'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='1M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M1' readonly/>

                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='1M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2L 2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3L 2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4L2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM3' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='.' readonly hidden/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M3' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='A3.5' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='B4' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M2' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='2M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M2' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='2M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='A4' readonly/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start'
                                                }}>

                                                    <div style={{
                                                        width: 296,
                                                        height: 'fit-content',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            displa: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                marginLeft: -20,
                                                                textAlign: 'end',
                                                                width: 'auto',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'end'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>} label="سیاهی"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="پست ریختگی"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>} label="پست NPG"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>} label="بدرنگی"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </ Collapse>
                                </div> : ' '}


                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            {Postt || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
                            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal
                                ? <div style={{
                                    lineHeight: 0
                                    , width: 390
                                    , marginTop: '48px'
                                    , borderRadius: 4
                                    , display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end'
                                }}>
                                    <div style={{
                                        width: 'inherit',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start'
                                    }}>
                                        <p style={{fontWeight: 'bold', fontSize: '24px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>رنگ Base</p>
                                        <p style={{fontWeight: 'bold', fontSize: '12px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>دسته</p>
                                    </div>
                                    <div onClick={() => setExpanded5(!expanded5)} style={{
                                        width: '390px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '48px',
                                        border: '1px solid #B1B1B1',
                                        borderRadius: '4px',
                                        justifyContent: 'space-between'
                                    }}>
                                        <p style={{fontWeight: 'bold', paddingRight: 18}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>انتخاب کنید</p>
                                        <img src={DropDown3} checked={Prostheticcolor} onClick={ProstheticcolorHandle}
                                             style={{width: 16, marginLeft: 20}}/>
                                    </div>
                                    <Collapse in={expanded5}>
                                        <div style={{
                                            width: 296,
                                            height: 'fit-content',
                                            alignItems: 'end',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start'
                                        }}>

                                            <div style={{display: 'flex', paddingBottom: 5, flexDirection: 'column'}}>
                                                <div style={{
                                                    marginTop: 2,
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'flex-start'
                                                }}>
                                                    <FormGroup dir="rtl" style={{
                                                        marginLeft: -3,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'end'
                                                    }}>
                                                        <div style={{
                                                            width: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'start'
                                                        }}>
                                                            <FormControlLabel control={< CheckBox/>}
                                                                              label="VITA Classic"
                                                                              labelPlacement="start"/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D1' readonly/>

                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='D3' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A3.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='B4' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='C4' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='A4' readonly/>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    marginLeft: -20,
                                                    marginTop: 2,
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'flex-start'
                                                }}>
                                                    <FormGroup dir="rtl" style={{
                                                        displa: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'end'
                                                    }}>
                                                        <div style={{
                                                            width: '100%',
                                                            displa: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'start'
                                                        }}>
                                                            <FormControlLabel control={< CheckBox/>}
                                                                              label="VITA 3D master"
                                                                              labelPlacement="start"/>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'row-reverse',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='1M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4L 1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M3' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M1' readonly/>

                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='1M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2L 2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3L 2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4L2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4R1.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='OM3' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='.' readonly hidden/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M1' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4R2.5' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='5M3' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='A3.5' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='B4' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='2M2' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='2M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='3M2' readonly/>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='2M2' readonly/>
                                                        <TextField style={{margin: 5}} inputProps={{
                                                            style: {
                                                                fontSize: 12,
                                                                fontWeight: 'bolder',
                                                                padding: '5px',
                                                                textAlign: 'center'
                                                            }
                                                        }} size="small" value='4M2' readonly/>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <TextField style={{visibility: 'hidden', margin: 5}}
                                                                   inputProps={{
                                                                       style: {
                                                                           fontSize: 12,
                                                                           fontWeight: 'bolder',
                                                                           padding: '5px',
                                                                           textAlign: 'center'
                                                                       }
                                                                   }} size="small" value='A4' readonly/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ Collapse>
                                </div> : ''}


                            {Postt || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
                            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal ?
                                <div style={{
                                    lineHeight: 0
                                    , width: 390
                                    , padding: 1
                                    , marginTop: '71px'
                                    , borderRadius: 4
                                    , display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'end'
                                }}>
                                    <div style={{
                                        width: 'inherit',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'start',
                                        height: '48px'
                                    }}>

                                        <p style={{fontWeight: 'bold', fontSize: '12px'}} checked={Prostheticcolor}
                                           onClick={ProstheticcolorHandle}>نوع رنگ</p>
                                    </div>
                                    <div onClick={() => setExpanded6(!expanded6)} style={{
                                        width: '390px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '48px',
                                        border: '1px solid #B1B1B1',
                                        borderRadius: '4px',
                                        justifyContent: 'space-between'
                                    }}>
                                        <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={ColorBase}
                                            onClick={ProstheticcolorHandle}>انتخاب کنید</h5>
                                        <img src={DropDown3} checked={ColorBase} onClick={ColorBaseHandle}
                                             style={{width: 16, marginLeft: 20}}/>
                                    </div>
                                    < Collapse in={expanded6}>
                                        <div style={{
                                            width: 296,
                                            height: 'fit-content',
                                            alignItems: 'end',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'start'
                                        }}>

                                            <div style={{display: 'flex', flexDirection: 'column'}}>

                                                <div style={{
                                                    display: 'flex',
                                                    paddingBottom: 1,
                                                    flexDirection: 'column'
                                                }}>
                                                    <div style={{
                                                        marginTop: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            marginLeft: -20,
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                width: '100%',
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'start'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="VITA Classic"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'space-between'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D1' readonly/>

                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='D3' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A3.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='B4' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='C4' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='A4' readonly/>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        marginLeft: -20,
                                                        marginTop: 2,
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                width: '100%',
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                justifyContent: 'start'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="VITA 3D master"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'row-reverse',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'space-between'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='1M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4L 1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M3' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M1' readonly/>

                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='1M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2L 2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3L 2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4L2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4R1.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='OM3' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='.' readonly hidden/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M1' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4R2.5' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='5M3' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='A3.5' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='B4' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='2M2' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='2M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='3M2' readonly/>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='2M2' readonly/>
                                                            <TextField style={{margin: 5}} inputProps={{
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 'bolder',
                                                                    padding: '5px',
                                                                    textAlign: 'center'
                                                                }
                                                            }} size="small" value='4M2' readonly/>
                                                        </div>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'flex-start'
                                                        }}>
                                                            <TextField style={{visibility: 'hidden', margin: 5}}
                                                                       inputProps={{
                                                                           style: {
                                                                               fontSize: 12,
                                                                               fontWeight: 'bolder',
                                                                               padding: '5px',
                                                                               textAlign: 'center'
                                                                           }
                                                                       }} size="small" value='A4' readonly/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start'
                                                }}>

                                                    <div style={{
                                                        width: 296,
                                                        height: 'fit-content',
                                                        alignItems: 'end',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'start'
                                                    }}>
                                                        <FormGroup dir="rtl" style={{
                                                            displa: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'end'
                                                        }}>
                                                            <div style={{
                                                                marginLeft: -20,
                                                                textAlign: 'end',
                                                                width: 'auto',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'end'
                                                            }}>
                                                                <FormControlLabel control={< CheckBox/>} label="سیاهی"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>}
                                                                                  label="پست ریختگی"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>} label="پست NPG"
                                                                                  labelPlacement="start"/>
                                                                <FormControlLabel control={< CheckBox/>} label="بدرنگی"
                                                                                  labelPlacement="start"/>
                                                            </div>
                                                        </FormGroup>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </ Collapse>
                                </div> : ' '}


                        </div>
                        <div style={{
                            lineHeight: 0
                            , padding: 1
                            , marginTop: '48px'
                            , borderRadius: 8
                            , paddingRight: 2
                            , textAlign: 'start'
                        }}>
                            <p style={{fontWeight: 'bold', fontSize: '20px'}}>آخرین مهلت مجاز تحویل</p>
                            <p style={{fontWeight: 'bold', fontSize: '12px', marginTop: '24px'}}>تاریخ پرداخت</p>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextField placeholder='روز' sx={{width: '265.66px', height: '48px', marginLeft: '4px'}}
                                           id="outlined-basic" fullWidth variant="outlined"/>
                                <TextField placeholder='ماه' sx={{width: '265.66px', height: '48px', marginLeft: '4px'}}
                                           id="outlined-basic" fullWidth variant="outlined"/>
                                <TextField placeholder='سال' sx={{width: '265.66px', height: '48px'}}
                                           id="outlined-basic" fullWidth variant="outlined"/>
                            </div>
                        </div>


                        <div style={{
                            lineHeight: 0
                            , padding: 1
                            , marginTop: '48px'
                            , textAlign: 'start'
                            , height: '48px'
                        }}>
                            <p style={{fontWeight: 'bold', fontSize: '24px'}} checked={Material}> توضیحات و پیوست </p>
                            <p style={{fontWeight: 'bold', fontSize: '12px', marginTop: 24}}> آپلود فایل</p>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <label htmlFor="upload-photo">
                                    <input
                                        style={{
                                            height: '48px',
                                            width: '390px',
                                            marginLeft: '24px',
                                            border: '1px solid #B1B1B1',
                                            paddingRight: '8px',
                                            paddingTop: '11px',
                                            paddingBottom: '11px',
                                            borderRadius: '4px'
                                        }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        onClick={uploadFiles}
                                    />
                                </label>
                                <div style={{marginTop: '-23px', height: '48px'}}>
                                    <p style={{fontWeight: 'bold', fontSize: '12px'}}>توضیحات</p>
                                    <TextField
                                        variant="outlined"
                                        InputProps={{
                                            disableUnderline: true,
                                            sx: {height: '48px', width: '390px', borderRadius: '4px'}
                                        }}


                                        type="text"

                                    />
                                </div>

                            </div>
                        </div>

                        <div style={{
                            lineHeight: 0
                            , padding: 1
                            , marginTop: '96px'
                            , textAlign: 'start'
                        }}>
                            <p style={{fontWeight: 'bold', fontSize: '24px'}} checked={Material}>ثبت کلینیک</p>


                            <p style={{fontWeight: 'bold', fontSize: '12px'}}>نام کلینیک</p>


                            <FormControl fullWidth>

                                <Select
                                    InputLabelProps={{shrink: false}}
                                    labelId="demo-simple-select-label"
                                    id="DrID"
                                    value={Dr}
                                    label="Dr"
                                    onChange={DRhandleChange}
                                >
                                    <MenuItem value={10}>دکتر رضا ملا</MenuItem>
                                    <MenuItem value={20}>دکتر سعید فخری</MenuItem>
                                    <MenuItem value={30}>دکتر سارا محمدی</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Button onClick={() => setReqAdd(true)} variant='contained'
                                    style={{marginTop: 20, height: 48, width: 118, backgroundColor: '#1C39BB'}}>ثبت
                                درخواست</Button>
                            <Button variant='contained' style={{
                                marginTop: 20,
                                height: 48,
                                width: 85,
                                color: '#1C39BB',
                                backgroundColor: '#EFF2FF'
                            }}>انصراف</Button>

                        </div>
                    </div>
                    <div>

                        <div style={{
                            [`& fieldset`]: {
                                borderRadius: '5px',
                                height: '56px',
                                textAlign: 'center',
                                paddingTop: 0,
                                fontSize: '2px',
                                color: 'black'

                            }
                            , boxShadow: '0px 7px 52px -24px #D2D9F8',
                        }}>
                            <div style={{

                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                margin: 3,

                            }}>
                                <p style={{
                                    borderRadius: '8px',
                                    fontWeight: 'bolder',
                                    fontSize: '20px',
                                    paddingRight: '16px'
                                }}>دندان انتخاب شده</p>
                                {teeth.map((data, i) => {

                                    return (

                                        <TextField sx={{
                                            "& fieldset": {border: 'none'}, margin: 3
                                        }}


                                                   InputProps={{
                                                       style: {
                                                           flexBasis: '30%',
                                                           borderRadius: 12,
                                                           fontSize: 12,
                                                           fontWeight: 'bolder',
                                                           width: '90px',
                                                           color: '#2143DD'
                                                       },
                                                       startAdornment: (
                                                           <InputAdornment position="end">
                                                               <ClearOutlinedIcon style={{width: 15, marginRight: 10}}
                                                                                  onClick={() => handleDeleteTeeth(i)}/>
                                                           </InputAdornment>
                                                       )
                                                   }}
                                                   value={data} onChange={e => handleChangeTeeth(e, i)}/>


                                    )
                                })}
                            </div>
                        </div>

                        <svg style={{marginTop: '64px'}} width="421" height="688" viewBox="0 0 239 414" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="239" height="413.275" fill="white"/>
                            <g clip-path="url(#clip0_158_1321)">
                                //teeth
                                {imUL5 ? '' : <path onClick={handleAdd} id="UL5"
                                                    d="M208.663 70.0831C208.76 71.7819 208.485 73.4815 207.857 75.063C207.229 76.6445 206.263 78.0698 205.027 79.2395C202.185 81.9186 198.629 83.7152 194.994 85.0705C191.795 86.2525 188.081 86.8146 184.908 85.2176C182.598 84.0915 180.669 82.3125 179.36 80.101C178.472 73.4977 183.563 67.9451 188.816 64.7616C192.546 62.6288 195.84 59.3981 200.284 58.8412C201.676 58.6574 203.383 58.2476 204.486 59.4033C207.228 62.2138 208.484 66.222 208.663 70.0831ZM205.306 66.9995C204.912 64.8982 204.365 62.4607 202.201 61.5361C199.737 60.3174 197.342 62.3714 195.629 63.9526C197.083 63.6385 198.517 63.235 199.921 62.7444C200.625 62.529 201.45 62.2191 202.112 62.7444C203.598 63.774 204.329 65.5181 205.306 66.9995ZM201.986 77.3273C202.545 76.799 203.05 76.2165 203.493 75.5885C201.812 76.1138 200.137 76.7179 198.445 77.238C197.557 74.4065 194.006 73.5292 193.386 70.5664C193.57 69.4843 194.463 68.6647 194.962 67.6929C193.029 67.6929 191.637 69.1008 190.345 70.3195L191.779 70.2092C192.698 73.0774 195.115 74.853 197.326 76.6811C197.205 78.5723 195.388 79.8068 194.369 81.283C195.262 80.5738 196.128 79.8383 197.037 79.1502C198.398 77.9472 200.389 78.1258 201.986 77.3273ZM183.841 76.907C184.671 78.6239 185.904 80.1145 187.434 81.2514C186.231 79.2184 185.401 76.9806 185.517 74.5851C184.96 75.3626 184.398 76.1348 183.841 76.907Z"
                                                    fill={colorUL5}/>}
                                {imUr1 ? '' : <path onClick={handleAdd} id="UR1"
                                                    d="M121.244 6.2881C120.756 3.93991 119.5 0.861535 116.7 0.745964C113.736 0.735415 110.773 0.898544 107.827 1.23451C104.077 1.60224 100.415 3.4251 98.2036 6.52965C97.8989 7.08659 97.1214 7.6802 97.2265 8.34211C97.2463 8.47444 97.2967 8.60034 97.3736 8.70983C98.1931 10.5747 99.3908 12.3083 99.7533 14.357C99.9411 15.4536 100.033 16.5645 100.026 17.6771C100.174 18.8538 100.294 20.0883 100.378 21.3543C100.478 22.8777 100.52 24.3276 100.525 25.6987C102.411 27.7475 103.888 30.4791 106.829 30.8994C110.696 31.4562 115.234 30.8574 117.914 27.7212C121.066 24.3224 122.074 19.5787 122.311 15.1135C122.337 12.1454 121.575 9.23515 121.244 6.2881ZM101.844 19.9885C102.564 22.3104 102.895 24.8162 104.418 26.8176C101.713 25.9614 100.573 22.4102 101.844 19.9885ZM113.144 5.07461C110.68 4.85923 109.183 7.38077 106.84 7.54362C104.971 7.66703 103.13 8.0653 101.377 8.72559C102.249 7.81678 103.037 6.58228 104.418 6.46671C106.267 6.16202 108.137 5.83107 109.787 4.89074C112.781 3.257 117.504 3.62472 118.985 7.11285C117.341 5.72075 115.355 4.70688 113.144 5.07461ZM116.149 26.119C116.202 24.7429 116.483 23.3851 116.979 22.1003C117.971 19.5735 118.428 16.8786 119.374 14.3308C120.561 18.6016 117.929 22.4837 116.149 26.119Z"
                                                    fill={colorUR1}/>}
                                {imUr2 ? '' : <path onClick={handleAdd} id="UR2"
                                                    d="M97.7047 13.0753C97.2529 11.8671 96.8116 10.8374 96.4439 9.98115C96.0079 8.96728 95.5718 8.04797 95.1673 7.22847C94.0274 6.0465 91.8683 6.08327 90.3712 6.5508C85.8172 8.02787 81.6016 10.3937 77.9683 13.5113C76.7128 14.7143 75.0948 16.222 75.4993 18.1499C76.3819 21.8271 80.658 23.7393 80.8734 27.6582C81.2411 28.9505 80.6843 31.0097 82.2392 31.6034C85.8587 33.2266 89.5307 35.3752 93.6439 35.1073C94.8364 35.0022 96.4334 34.9707 97.0112 33.6889C97.9726 31.7767 98.4243 29.6912 98.9181 27.6214L99.0547 22.6256L97.7047 13.0753ZM81.4197 20.0305C81.2621 18.8643 80.7998 17.6141 81.3882 16.4899C82.7173 13.2959 86.053 11.6727 89.0789 10.4487C87.6973 11.72 86.1423 12.7864 84.7397 14.0419C82.9799 15.6126 82.381 17.9765 81.4092 20.0305H81.4197ZM83.521 29.7175C85.8009 30.0379 87.7971 31.2251 89.6778 32.4859C88.5012 32.5826 87.3192 32.3794 86.2425 31.8953C85.1658 31.4111 84.2294 30.6618 83.521 29.7175ZM94.9099 31.7452C94.9099 29.6439 94.6315 27.1224 96.3546 25.5412C96.4702 27.695 96.1917 29.9328 94.9099 31.7452Z"
                                                    fill={colorUR2}/>}
                                {imUL1 ? '' : <path onClick={handleAdd} id="UL1"
                                                    d="M143.076 4.15529C138.995 1.06115 133.542 0.378227 128.599 1.17146C126.392 1.73881 123.02 2.3009 122.767 5.10086C122.542 9.7447 124.212 14.2047 124.732 18.7592C125.226 21.8586 125.221 25.2207 126.991 27.9366C128.614 30.5632 131.451 32.0446 134.051 33.5312C134.845 33.92 135.801 34.6817 136.604 33.8674C140.245 31.1936 142.493 27.0383 144.085 22.8987C145.561 19.253 145.052 15.2343 145.876 11.4467C146.179 10.0907 146.074 8.67558 145.576 7.37857C145.078 6.08156 144.209 4.96033 143.076 4.15529ZM139.688 7.95335C136.195 5.43707 131.593 5.19017 127.49 5.93612C125.667 6.2986 126.408 8.56273 126.119 9.84976C125.657 8.62577 124.596 7.17588 125.457 5.88359C126.728 4.24984 129.061 4.22883 130.947 4.20782C134.477 4.45472 138.343 5.20067 140.928 7.82728C142.194 9.04602 142.262 10.9109 142.567 12.5552C141.768 10.9214 141.259 9.004 139.688 7.95335Z"
                                                    fill={colorUL1}/>}
                                {imUL2 ? '' : <path onClick={handleAdd} id="UL2"
                                                    d="M166.212 18.7644C165.662 16.7197 164.705 14.8072 163.398 13.1416C162.091 11.4761 160.461 10.0919 158.605 9.07224C156.015 7.62235 152.968 7.66963 150.153 6.97095C149.054 6.67576 147.907 6.6043 146.78 6.76082C147.233 8.35796 147.372 10.0277 147.19 11.6778C146.46 17.7505 145.856 23.9178 146.665 30.0115C146.927 31.8134 147.715 34.1721 149.864 34.3454C151.823 34.524 154.119 34.8707 155.758 33.4892C157.654 32.0183 159.824 30.9361 161.71 29.4547C162.091 29.0851 162.431 28.6746 162.724 28.2307C163.722 26.7388 164.273 24.9527 165.114 23.3715C165.13 23.3374 165.144 23.3023 165.156 23.2664C165.765 21.8743 166.774 20.3929 166.212 18.7644ZM154.917 31.8974C156.577 29.9327 158.642 28.3673 160.643 26.7703C160.375 29.7961 157.392 31.0727 154.917 31.8974ZM156.141 11.9352C154.632 11.1443 152.899 10.8852 151.224 11.1998C149.675 11.8564 149.507 13.8264 148.808 15.1449C148.74 13.7213 148.282 12.0403 149.386 10.8741C150.904 9.13002 153.588 9.61332 155.49 10.3803C159.199 12.0718 162.477 15.2027 163.554 19.2319C161.754 16.2011 159.2 13.6874 156.141 11.9352Z"
                                                    fill={colorUL2}/>}
                                {imUr3 ? '' : <path onClick={handleAdd} id="UR3"
                                                    d="M83.085 40.8279C82.6542 37.676 81.8557 34.4873 80.2009 31.7294C79.5706 30.6472 79.5548 29.3602 79.3499 28.1625C79.103 25.7933 77.6479 23.797 76.2505 21.9584C75.7232 21.211 75.0383 20.5884 74.244 20.1345C73.4498 19.6807 72.5657 19.4067 71.654 19.3318C69.4581 19.1269 67.4514 20.2459 65.5392 21.1179C63.2226 22.2526 60.7063 23.1141 58.7468 24.8477C57.0921 26.4236 56.1623 28.5722 55.1064 30.5579C54.0505 32.5436 52.8685 34.6869 52.7529 37.0404C54.6546 37.6235 56.8399 37.4764 58.4894 38.7214C60.7903 40.4182 62.4136 42.9608 65.0296 44.2373C67.8034 45.6609 71.1759 46.7851 72.3527 50.0158C74.3436 50.0526 76.4449 50.1156 78.2678 49.1805C81.3462 47.6571 83.542 44.2688 83.085 40.8279ZM60.4384 34.2089C60.3281 30.8784 63.0177 28.5617 65.513 26.8544C68.397 24.9475 72.0427 23.361 75.4941 24.7531C69.0484 24.3119 63.6849 29.087 60.4384 34.1931V34.2089ZM79.6336 41.6737C78.7121 39.2665 78.3007 36.6941 78.4254 34.1196C80.2955 36.2051 80.1011 39.0996 79.6336 41.658V41.6737Z"
                                                    fill={colorUR3}/>}
                                {imUL3 ? '' : <path onClick={handleAdd} id="UL3"
                                                    d="M186.883 31.0674C185.832 29.0817 184.897 26.9384 183.243 25.3572C181.283 23.6236 178.767 22.7621 176.45 21.6274C174.517 20.7554 172.531 19.6365 170.335 19.8413C168.781 19.9541 167.331 20.666 166.29 21.827C166.196 22.0634 166.096 22.3103 165.996 22.5783C165.697 23.382 165.686 23.5133 165.471 24.1174C165.049 25.2758 164.511 26.3883 163.864 27.4375C163.475 28.0538 163.043 28.6419 162.571 29.1973C162.518 30.2573 162.255 31.2963 161.799 32.2547C160.134 35.0126 159.325 38.2013 158.904 41.3532C158.447 44.8098 160.643 48.2192 163.722 49.6743C165.545 50.6094 167.646 50.5463 169.637 50.5096C170.813 47.2946 174.186 46.1704 176.96 44.731C179.586 43.4545 181.199 40.912 183.5 39.2152C185.149 37.9702 187.335 38.1172 189.236 37.5341C189.121 35.1965 187.892 33.1267 186.883 31.0674ZM162.356 42.199C161.888 39.6407 161.694 36.7462 163.548 34.6606C163.676 37.2288 163.27 39.7956 162.356 42.199ZM166.511 25.2574C169.947 23.8653 173.592 25.4518 176.492 27.3587C178.987 29.087 181.677 31.4036 181.567 34.7132C178.305 29.6281 172.941 24.8529 166.511 25.2574ZM162.697 28.257C163.695 26.7651 164.247 24.979 165.087 23.3978C165.104 23.3637 165.118 23.3286 165.13 23.2927C164.053 24.7899 163.002 26.4131 162.697 28.257Z"
                                                    fill={colorUL3}/>}
                                {imUr4 ? '' : <path onClick={handleAdd} id="UR4"
                                                    d="M69.8099 47.8988C67.0205 45.6557 63.2749 44.915 60.7271 42.3094C58.547 40.2081 55.6263 37.7286 52.3588 38.9578C48.8654 40.7019 46.8482 44.2793 43.7855 46.6012C40.8805 48.7656 41.1222 52.6739 41.243 55.8942C43.0921 55.9257 45.041 55.8049 46.7641 56.6138C48.4872 57.4228 49.3119 59.4506 51.0875 60.2491C53.1888 61.2577 55.0799 62.6813 57.2127 63.6374C60.0337 64.8404 63.3065 64.0261 65.7177 62.2926C68.5492 60.2963 71.2441 57.5384 71.7641 53.9662C71.9585 51.8282 71.6223 49.3014 69.8099 47.8988ZM45.0095 52.6267C44.4842 52.1013 43.5176 51.7021 43.7488 50.788C43.8433 49.5273 44.9833 48.7603 45.7397 47.8725C45.3697 49.4423 45.1255 51.0391 45.0095 52.6477V52.6267ZM48.1615 55.2112C49.5536 54.9906 51.0665 54.5388 52.4271 55.1429C53.7876 55.7471 54.6071 56.9868 55.4687 58.1005C53.2098 56.6559 50.5832 56.1831 48.1457 55.2323L48.1615 55.2112ZM55.7313 47.0162C54.6177 48.0091 55.6998 49.2961 56.0675 50.3678C55.0169 50.7303 53.9662 50.9772 53.0259 51.597C52.7296 52.4887 52.4876 53.3974 52.301 54.3182L51.3134 52.8525C52.0459 51.6774 52.8884 50.5745 53.8296 49.5588C53.7639 48.7941 53.7798 48.0245 53.8769 47.2631C54.4023 46.3333 55.4529 45.8448 56.2724 45.2249C56.078 44.3056 55.8889 43.3758 55.7156 42.4512C57.1747 43.7242 58.5114 45.1313 59.708 46.6538C58.3842 46.5172 56.6559 45.6136 55.7156 47.0372L55.7313 47.0162ZM63.9684 55.2428C62.4898 56.6467 61.248 58.2805 60.2911 60.081C60.1966 58.8254 59.8551 57.3388 60.9425 56.4037C62.5658 54.7437 64.4464 53.3411 66.1222 51.7231C65.7331 53.0781 64.9832 54.3019 63.9526 55.2638L63.9684 55.2428Z"
                                                    fill={colorUR4}/>}
                                {imUL4 ? '' : <path onClick={handleAdd} id="UL4"
                                                    d="M197.499 44.0639C197 42.3828 195.997 40.5862 194.132 40.208C190.938 39.4305 187.524 38.8317 184.272 39.5251C183.043 41.1011 182.281 43.1025 180.447 44.1006C177.653 46.0653 173.54 47.158 172.604 50.872C171.354 54.3234 173.067 57.759 174.606 60.7901C176.082 64.1626 180.053 65.933 183.536 65.8384C187.45 63.5165 191.574 61.2576 194.778 57.9586C198.361 54.3549 198.97 48.7497 197.499 44.0639ZM176.45 55.2742C178.893 56.1778 180.169 58.5575 181.467 60.6377C179.193 59.5262 177.407 57.6171 176.45 55.2742ZM183.195 49.6218C181.752 50.036 180.262 50.2586 178.761 50.2837C181.346 48.6342 184.104 47.2578 186.615 45.4717C185.842 46.6141 185.004 47.7103 184.104 48.755C184.986 49.4554 185.862 50.1558 186.73 50.8563C187.707 50.2469 188.695 49.6585 189.704 49.0964C188.991 50.2855 188.216 51.4358 187.382 52.5426C187.613 53.7981 187.834 55.0641 188.007 56.3354C186.641 53.9241 185.701 51.1242 183.195 49.6218ZM186.194 60.0546C186.557 59.1406 186.588 57.9796 187.403 57.3125C188.49 56.4142 189.951 56.1988 191.264 55.81C189.697 57.3652 188.001 58.7852 186.194 60.0546Z"
                                                    fill={colorUL4}/>}
                                {imUr5 ? '' : <path onClick={handleAdd} id="UR5"
                                                    d="M61.8369 71.3386C61.7844 69.2373 60.3765 67.5878 58.8373 66.348C57.1668 64.8614 54.7293 65.0295 52.8749 63.8843C51.0205 62.7391 48.9823 61.8145 47.0964 60.6483C45.5677 59.2142 44.1861 56.9973 41.7591 57.3177C39.4034 58.1333 37.2789 59.5046 35.5656 61.3154C32.4504 65.4497 31.7413 70.8658 31.8253 75.9089C36.8159 77.6424 42.0165 78.9662 46.5973 81.6874C48.2468 82.6435 49.2607 84.314 50.7421 85.475C54.1252 85.8637 58.2437 84.8918 59.9142 81.6033C61.4408 78.4084 62.1037 74.8694 61.8369 71.3386ZM37.026 75.0578C35.8125 74.1385 34.0054 73.1299 34.4256 71.307C34.951 68.6121 35.3134 65.8385 36.3536 63.2854C36.8789 61.8408 38.4076 61.2839 39.6841 60.6588C37.0575 63.6058 36.3431 67.5825 35.5288 71.3123C35.2136 72.7674 36.4534 73.8654 37.026 75.0578ZM41.7906 74.3329C42.6574 74.0492 43.5715 73.3138 44.5223 73.7498C45.72 74.2121 46.6236 75.1471 47.6112 75.9561C45.6424 75.5446 43.7031 75.0023 41.8064 74.3329H41.7906ZM47.5324 67.2831C47.8709 68.4246 48.0702 69.6029 48.126 70.7922C47.7951 71.9742 46.8705 72.8935 46.1771 73.8443C46.0878 73.6132 45.9092 73.1404 45.8251 72.9093C47.4011 71.0549 46.3504 68.7067 46.6919 66.6054C45.9034 65.5945 45.3798 64.4028 45.1685 63.1383C46.5601 64.5752 48.1295 65.8286 49.8386 66.8681C49.0768 66.9889 48.3099 67.1307 47.5324 67.2831ZM56.6257 76.5865C56.4156 77.9051 55.3334 78.7981 54.5244 79.7647C55.0497 78.0469 56.0216 76.3291 55.7169 74.48C55.4385 72.2474 54.4666 69.8677 55.6118 67.7244C56.5049 70.5663 57.1405 73.608 56.6362 76.5865H56.6257Z"
                                                    fill={colorUR5}/>}
                                {imUr6 ? '' : <path onClick={handleAdd} id="UR6"
                                                    d="M56.7239 93.3601C56.4928 90.5759 54.5228 88.4483 52.5214 86.7042C50.5263 84.837 48.3946 83.1214 46.144 81.5719C43.7275 79.9434 40.7647 79.5809 38.0645 78.6511C35.7479 77.9734 33.3629 76.6706 30.9044 77.5059C28.241 78.2833 25.4726 79.4233 23.6865 81.6454C21.5852 84.4874 21.5117 88.1699 20.3087 91.3848C19.4471 94.0115 17.6821 96.3596 17.4194 99.1649C17.1883 101.876 19.3526 103.893 21.0389 105.679C23.8914 108.379 26.3971 111.589 30.0219 113.317C34.4818 116.201 40.1868 117.851 45.3927 116.159C48.1769 115.392 50.0418 112.97 51.56 110.669C54.8118 105.542 57.4121 99.5168 56.7239 93.3601ZM37.9752 96.7169C37.9752 98.2193 38.1696 99.832 37.4236 101.214C36.373 103.367 34.3452 104.833 32.3333 106.041C33.5888 104.707 34.9966 103.499 36.0105 101.975C37.3396 100.037 37.1452 97.3315 35.979 95.372C33.4259 94.3949 30.6627 94.1113 28.0572 93.2707L26.5232 94.5C26.8647 92.073 26.9645 89.6145 27.4951 87.2138C28.5089 88.9001 28.3461 90.891 28.0204 92.7349C30.6981 92.7205 33.3663 93.0543 35.958 93.7278C36.746 91.4636 38.7579 90.1083 40.9538 89.3991C40.0677 88.6987 39.1922 87.9773 38.3272 87.2348C40.7962 88.1279 43.4386 88.0491 46.0284 88.0753L45.6291 89.6513C42.8555 91.0434 38.511 90.3395 37.1452 93.7856C39.0206 96.554 40.8225 99.5221 43.7958 101.219C42.6296 100.841 41.374 100.594 40.3707 99.853C39.3778 99.0283 38.7054 97.8253 37.9752 96.7169ZM45.855 106.945C45.046 108.789 42.9553 109.361 41.1902 109.85C42.7661 108.069 45.0513 106.661 45.5556 104.182C46.0231 101.918 45.9916 99.5904 46.3016 97.3052C47.3054 100.469 47.147 103.887 45.855 106.945Z"
                                                    fill={colorUR6}/>}
                                {imUr7 ? '' : <path onClick={handleAdd} id="UR7"
                                                    d="M45.0882 124.469C43.6003 122.373 41.9397 120.405 40.1239 118.586C38.59 116.716 35.9633 117.12 33.8936 116.348C31.6557 115.534 29.5177 114.462 27.3481 113.475C25.2468 112.513 23.6708 110.806 21.7377 109.65C19.9831 108.836 17.9291 108.925 16.0747 109.288C13.4796 110.002 10.438 111.862 10.4012 114.877C10.2594 117.089 10.2016 119.353 9.35059 121.438C8.53634 124.033 6.8238 126.355 6.5874 129.108C6.97614 132.155 9.90743 133.836 12.1768 135.459C16.4477 138.159 19.9936 141.994 24.7845 143.891C29.0974 145.84 34.1195 144.537 38.0751 142.315C41.9415 140.093 43.528 135.654 44.7993 131.63C45.4769 129.365 46.5013 126.692 45.0882 124.469ZM36.5149 138.165C36.0264 136.883 35.7742 135.464 34.9075 134.367C32.22 131.336 28.9296 128.899 25.2468 127.212C23.3136 128.604 21.2701 130.043 20.582 132.465C20.6923 131.414 20.582 130.332 20.9497 129.35C21.869 128.241 23.1875 127.579 24.3327 126.755C22.0003 124.396 18.591 124.128 15.4601 124.291C15.0528 124.639 14.6652 125.009 14.2991 125.399C14.6773 122.962 14.2991 120.225 15.8331 118.124C15.9591 119.973 15.8698 121.827 16.0169 123.671C17.5929 123.671 19.1268 123.324 20.6923 123.33C22.1159 123.524 23.3189 124.38 24.6112 124.958C24.5061 122.158 24.2645 119.358 24.3485 116.553C26.061 119.39 25.8824 122.71 25.9928 125.883C27.7526 127.522 30.1218 128.331 31.8816 129.985C34.1983 132.139 37.0245 134.65 36.5149 138.165ZM41.185 130.206C40.0398 127.942 38.5584 125.888 37.3239 123.666C40.1922 124.459 41.2743 127.506 41.185 130.206Z"
                                                    fill={colorUR7}/>}
                                {imUL7 ? '' : <path onClick={handleAdd} id="UL7"
                                                    d="M225.578 117.525C224.9 114.951 223.477 112.35 221.055 111.079C220.664 110.946 220.261 110.851 219.852 110.795C218.776 112.211 217.506 113.468 216.08 114.53C214.919 115.387 213.653 116.094 212.314 116.632C210.085 117.453 207.785 118.063 205.443 118.455C203.08 118.928 200.684 119.218 198.277 119.321L198.104 119.405C197.053 119.931 196.003 120.545 194.999 121.17C193.854 121.927 192.299 122.746 192.409 124.359C192.462 130.758 193.397 137.434 196.943 142.914C197.878 144.39 199.433 145.808 201.319 145.54C204.376 145.151 206.787 142.914 209.808 142.388C213.643 141.789 217.499 142.483 221.339 142.677C222.027 142.756 222.724 142.662 223.367 142.402C224.009 142.143 224.576 141.726 225.016 141.19C226.891 138.848 227.312 135.696 227.443 132.785C227.521 127.637 226.894 122.503 225.578 117.525ZM213.139 117.803L213.611 117.488C212.969 118.85 211.892 119.959 210.549 120.64C210.454 120.687 210.365 120.734 210.27 120.771H210.223C210.113 120.819 210.008 120.866 209.892 120.908L209.551 121.029C209.419 121.071 209.288 121.113 209.151 121.144C208.493 121.322 207.805 121.36 207.131 121.256C206.457 121.152 205.812 120.908 205.238 120.54C208.041 120.207 210.737 119.266 213.139 117.782V117.803ZM221.78 134.708C221.864 132.045 222.726 129.292 221.733 126.697C221.517 126.802 221.302 126.897 221.087 126.986C217.845 128.32 214.257 127.989 210.853 128.142C210.428 129.586 210.449 131.125 210.06 132.586C209.309 134.403 207.176 135.837 207.722 138.028C207.859 139.021 208.962 138.932 209.713 139.047C211.857 139.215 214.011 139.189 216.154 139.326C213.606 139.72 211 140.25 208.416 139.877C207.491 139.777 206.53 139.126 206.588 138.102C206.189 135.475 208.379 133.568 209.467 131.409C206.661 131.288 203.772 130.674 201.019 131.409C198.918 132.46 198.829 135.086 198.33 137.103C198.12 134.703 198.33 131.75 200.746 130.5C203.105 129.607 205.716 130.174 208.179 130.159C207.654 128.231 206.604 126.151 207.47 124.17C207.865 123.248 208.519 122.46 209.351 121.901L209.755 121.607L210.17 121.328L210.459 121.139L210.733 120.96C209.918 122.247 208.91 123.45 208.458 124.927C208.3 126.303 208.91 127.627 209.235 128.945C209.761 128.084 209.981 126.481 211.295 126.534C214.531 126.686 217.782 127.096 221.013 126.534L221.323 126.481C220.509 125.126 219.421 123.855 219.153 122.242C218.865 119.474 220.729 117.099 220.971 114.404C220.446 113.595 219.542 113.207 218.823 112.629C219.742 113.06 220.982 113.154 221.607 114.026C221.917 116.858 219.884 119.442 220.341 122.3C220.866 124.491 223.398 125.694 223.571 128.036C223.85 130.406 222.841 132.644 221.78 134.687V134.708Z"
                                                    fill={colorUL7}/>}
                                {imUr8 ? '' : <path onClick={handleAdd} id="UR8"
                                                    d="M37.1771 151.639C36.8462 150.431 36.5047 148.965 35.3017 148.34C33.1427 147.289 30.7367 146.874 28.4726 146.181C25.1368 145.325 22.0111 143.88 18.8749 142.504C16.8976 141.623 14.666 141.498 12.6026 142.152C10.6962 142.715 8.95476 143.731 7.52746 145.115C6.10016 146.498 5.02962 148.207 4.4076 150.095C3.46728 153.163 5.48977 155.973 6.16218 158.857C7.21282 162.534 7.17605 166.831 9.97075 169.763C13.0176 173.13 17.9661 173.44 22.2107 173.44C28.1521 172.19 34.1933 168.759 36.7674 163.007C38.4064 159.424 37.9756 155.348 37.1771 151.639ZM20.8922 148.876C20.134 149.672 19.1002 150.148 18.0025 150.207C16.9048 150.265 15.8261 149.902 14.9876 149.191C16.9384 148.906 18.9115 148.8 20.8817 148.876H20.8922ZM9.72385 149.002C9.46644 151.009 9.27207 153.026 8.81504 155.006C8.25552 153.658 8.01197 152.2 8.10302 150.743C8.19408 149.286 8.61733 147.869 9.34037 146.601C9.94449 145.498 11.2473 145.167 12.2874 144.631C11.2473 145.966 9.84467 147.216 9.71334 149.002H9.72385ZM10.8953 158.615C13.9422 159.109 16.8314 158.032 19.6787 157.113C17.9136 158.689 15.7545 160.102 13.3118 160.16C12.2664 160.165 11.6308 159.188 10.8848 158.615H10.8953ZM23.503 163.916C22.1897 165.613 20.1777 166.542 18.2498 167.294C19.142 166.019 20.1825 164.856 21.3492 163.827C22.7098 162.618 23.4505 160.927 24.3225 159.372C24.2647 160.906 24.4538 162.603 23.4873 163.916H23.503ZM29.2815 159.745L30.7997 159.009C31.185 159.892 31.5597 160.78 31.9239 161.673C31.0099 161.032 30.1151 160.389 29.2395 159.745H29.2815ZM31.677 156.808C30.9783 158.384 29.1817 159.188 27.5322 159.256C25.1464 159.426 22.7752 158.767 20.8186 157.391C18.8329 155.852 18.1237 153.142 18.4652 150.73L18.9905 150.757C19.3057 153.767 21.1181 156.693 24.0914 157.659C26.2715 158.474 29.2185 158.521 30.8207 156.609C31.5352 155.232 31.3828 153.588 31.6087 152.091C31.8556 153.62 32.3494 155.295 31.635 156.808H31.677Z"
                                                    fill={colorUR8}/>}
                                {imUL8 ? '' : <path onClick={handleAdd} id="UL8"
                                                    d="M230.017 147.221C227.595 144.185 223.44 143.544 219.799 143.371C216.38 143.313 212.923 143.129 209.535 143.623C206.467 144.29 203.945 146.318 201.655 148.351C200.263 149.606 198.703 151.229 199.076 153.289C199.496 156.393 201.392 159.015 202.958 161.647C203.898 163.354 205.584 164.798 205.584 166.9C205.758 168.355 205.49 170.377 207.16 171.076C209.902 171.754 212.771 171.207 215.565 171.454C218.192 171.549 220.671 173.03 223.34 172.505C225.778 172.111 227.758 170.341 228.961 168.26C231.015 164.683 231.493 160.475 231.798 156.435C231.882 153.31 232.018 149.816 230.017 147.221ZM221.612 147.016C221.533 148.33 221.26 149.643 221.454 150.983C221.948 152.49 223.141 153.609 224.049 154.87C222.98 154.548 222.021 153.935 221.279 153.101C220.537 152.266 220.041 151.242 219.847 150.142C219.658 148.781 220.845 147.899 221.633 147.016H221.612ZM216.437 163.443C215.863 161.507 215.4 159.539 215.051 157.549C213.028 157.575 211.972 159.509 210.27 160.176C208.584 159.461 207.355 158.038 205.963 156.898C206.661 158.731 207.454 160.528 208.211 162.34C207.047 161.165 206.139 159.761 205.544 158.218C204.949 156.675 204.68 155.025 204.754 153.373C206.299 155.416 207.833 157.654 210.218 158.799C211.3 157.975 212.251 156.987 213.28 156.094C211.836 155.306 210.128 154.576 209.435 152.968C209.099 151.855 209.214 150.662 209.146 149.522C210.401 152.564 212.855 155.264 216.08 156.157C218.339 156.625 219.757 154.691 220.997 153.157C220.608 154.208 220.425 155.453 219.637 156.309C218.66 157.145 217.32 157.292 216.143 157.665C216.453 159.574 216.558 161.511 216.458 163.443H216.437ZM226.156 167.583C223.839 169.358 220.761 169.101 218.055 168.633C220.367 168.034 222.962 168.218 225.047 166.947C226.849 165.234 227.469 162.692 228.725 160.601C228.94 163.144 228.352 165.991 226.177 167.583H226.156Z"
                                                    fill={colorUL8}/>}
                                {imLr8 ? '' : <path onClick={handleAdd} id="LR8"
                                                    d="M41.9521 260.622C40.5705 255.584 37.303 251.361 34.419 247.1C32.4963 243.996 28.4671 243.423 25.1419 243.949C21.3911 244.679 18.4125 247.248 15.3551 249.359C11.8512 251.807 8.84115 255.222 7.63291 259.393C6.42467 263.564 8.37361 268.224 11.93 270.551C15.9803 271.812 20.3877 271.643 24.4747 270.603C29.7909 269.936 35.9109 270.603 40.2343 266.826C42.178 265.408 42.5668 262.818 41.9521 260.622ZM26.5602 246.296C28.8401 245.525 30.9046 247.164 32.7748 248.235C31.1988 247.925 29.6228 247.41 28.0154 247.395C26.618 247.636 25.3415 248.298 24.0124 248.776C24.7058 247.804 25.2995 246.591 26.5602 246.296ZM28.9137 255.301C27.905 255.889 26.8859 256.467 25.8721 257.05C27.3272 259.677 27.5688 262.671 27.8735 265.592C26.9571 265.672 26.0488 265.826 25.1576 266.054C24.1595 266.795 23.4451 267.845 22.6151 268.759C22.7937 267.63 22.4785 266.133 23.5974 265.408C24.7163 264.683 26.0717 264.883 27.3009 264.636C26.5445 262.177 25.5621 259.798 24.9265 257.307C22.8725 257.638 20.7239 257.628 18.7645 258.442C18.05 259.388 17.7926 260.575 17.3356 261.652C16.9784 260.181 16.7525 258.306 18.1603 257.296C20.6136 255.784 23.7445 256.735 26.2966 255.469C27.4375 255.085 28.672 254.103 29.8908 254.823C31.9053 255.666 33.5202 257.249 34.4033 259.246C32.7938 257.649 30.9408 256.317 28.9137 255.301Z"
                                                    fill={colorLR8}/>}
                                {imLL8 ? '' : <path onClick={handleAdd} id="LL8"
                                                    d="M235.675 262.55C235.58 259.34 235.754 255.847 233.989 253.021C232.171 250.568 229.056 249.732 226.329 248.724C223.582 247.915 220.814 246.586 217.882 246.969C213.606 247.794 209.057 249.191 206.078 252.558C203.509 256.236 204.502 260.964 204.077 265.166C203.709 267.651 204.812 270.346 207.097 271.523C207.46 271.737 207.844 271.913 208.243 272.048C208.405 272.106 208.568 272.153 208.731 272.195L208.989 272.253H209.094C211.494 272.778 214.105 272.158 216.522 272.678C218.549 273.125 220.593 273.477 222.636 273.845C224.885 274.275 226.918 275.457 229.072 276.193L229.502 276.329C230.43 276.625 231.397 276.779 232.371 276.786C233.947 276.881 234.824 275.336 235.16 274.028C236.079 270.267 235.591 266.369 235.675 262.55ZM210.207 261.794C209.398 260.458 208.839 258.986 208.558 257.449C210.896 257.623 210.36 260.191 210.207 261.794ZM228.935 264.362C226.44 263.471 223.827 262.953 221.181 262.823C220.241 265.077 220.225 267.525 220.551 269.91C219.428 267.688 219.226 265.114 219.989 262.744C216.889 262.892 213.044 262.902 211.058 260.055C214.141 261.015 217.336 261.571 220.561 261.71C220.84 260.444 221.402 259.151 221.192 257.848C220.599 256.656 219.937 255.498 219.211 254.381C220.612 255.186 221.842 256.256 222.831 257.533C224.051 257.242 225.301 257.089 226.555 257.076C227.606 257.076 228.231 258.08 228.946 258.715C227.102 258.547 225.268 258.19 223.403 258.258C222.668 259.421 222.027 260.64 221.486 261.904C224.16 262.035 226.871 262.587 228.935 264.362Z"
                                                    fill={colorLL8}/>}
                                {imLr7 ? '' : <path onClick={handleAdd} id="LR7"
                                                    d="M46.2911 282.476C45.2773 278.714 44.5786 274.333 41.206 271.88C39.5145 270.472 37.2083 270.519 35.1491 270.829C30.1428 271.88 24.6427 270.94 20.0408 273.55C16.2008 275.468 13.9104 279.817 14.1047 284.057C14.0102 287.498 16.1114 290.576 15.8383 294.038C15.8383 296.78 15.0398 299.853 16.6315 302.317C18.2075 304.114 20.8919 304.061 23.0667 303.73C25.2415 303.399 27.6212 303.11 29.8381 302.511C31.9394 301.461 33.5153 299.57 35.5851 298.482C38.8526 296.454 42.9396 295.682 45.6135 292.761C47.9827 289.83 46.9951 285.832 46.2911 282.476ZM30.2846 280.548C28.863 281.61 27.1418 282.194 25.3676 282.218C24.3906 281.861 23.4581 281.392 22.5887 280.821C25.1575 280.816 27.7263 280.837 30.2846 280.569V280.548ZM21.7166 287.251C20.356 287.303 20.1722 288.911 19.5838 289.825C19.3579 288.711 18.696 287.151 20.0041 286.452C22.4468 285.375 25.3571 285.995 27.6317 287.24C25.6565 287.324 23.6761 287.03 21.7166 287.272V287.251ZM27.5424 285.517C27.1968 284.555 27.2211 283.499 27.6107 282.554L27.9207 282.649C29.0396 286.127 30.8625 289.294 32.3281 292.63C30.227 290.65 28.5924 288.228 27.5424 285.538V285.517ZM33.7044 295.083C32.709 295.795 31.7694 296.582 30.894 296.437C31.3142 295.635 32.4174 293.828 34.3348 293.387C35.3382 293.465 35.9948 294.332 36.7355 294.91C35.7269 294.936 34.6868 294.779 33.7044 295.083ZM33.4418 286.846C32.6275 287.734 32.1232 288.853 31.4928 289.872C31.3195 288.716 30.8992 287.335 31.8711 286.4C33.3367 284.713 35.8005 285.575 37.6811 285.874C36.2628 286.153 34.7919 286.268 33.4418 286.82V286.846ZM42.4615 292.74C43.1234 291.164 43.9955 289.546 43.7276 287.776C43.2022 283.048 41.9677 278.173 38.9997 274.312C40.3498 275.142 41.8364 276.004 42.5036 277.527C43.7486 280.259 44.0795 283.306 44.5261 286.242C44.8833 288.575 44.3632 291.128 42.4615 292.714V292.74Z"
                                                    fill={colorLR7}/>}
                                {imLL7 ? '' : <path onClick={handleAdd} id="LL7"
                                                    d="M233.127 284.33C231.809 281.735 229.334 280.001 227.238 278.084C228.662 277.327 229.697 278.903 230.758 279.602C230.38 278.84 230.012 278.073 229.67 277.306H229.471H229.045C227.59 277.264 226.104 277.254 224.78 276.571C221.93 275.303 218.928 274.408 215.849 273.908C213.506 273.508 211.037 274.013 208.778 273.172L208.679 273.135L208.49 273.072C208.311 273.015 208.132 272.946 207.964 272.878C206.819 272.452 205.621 271.948 204.455 272.5C202.396 273.288 201.828 275.589 201.014 277.401C198.992 282.129 197.185 287.203 197.862 292.415C198.151 294.81 199.401 296.29 201.66 298.356C204.014 299.049 206.604 298.881 208.831 300.006C212.167 301.65 214.578 304.565 217.136 307.176C218.985 309.136 221.822 309.955 224.491 309.734C226.55 309.551 228.646 308.201 229.072 306.057C230.059 301.445 230.621 296.728 232.082 292.226C232.765 289.683 233.962 286.978 233.127 284.33ZM217.11 290.55C215.8 292.262 214.274 293.798 212.571 295.12C212.813 295.808 213.065 296.502 213.317 296.195L211.552 295.02C213.189 293.484 214.726 291.845 216.154 290.114C212.132 288.708 208.187 287.091 204.334 285.27C208.7 285.018 212.403 287.634 216.417 288.948C216.32 286.695 216.711 284.448 217.562 282.36C219.35 282.403 221.121 282.716 222.815 283.29C221.328 283.521 219.831 283.679 218.334 283.815C217.956 285.696 217.625 287.587 217.31 289.483C220.089 290.118 222.717 291.288 225.048 292.929C222.448 291.99 219.798 291.196 217.11 290.55ZM219.59 303.157C221.754 301.786 224.113 300.751 226.251 299.323C225.754 300.632 224.819 301.729 223.604 302.425C222.389 303.122 220.97 303.375 219.59 303.142V303.157ZM228.357 291.206C227.742 288.985 227.564 286.666 227.832 284.377C228.777 286.479 229.917 289.058 228.357 291.191V291.206Z"
                                                    fill={colorLL7}/>}
                                {imLr6 ? '' : <path onClick={handleAdd} id="LR6"
                                                    d="M55.9835 317.147C55.6052 312.755 52.9471 309.099 50.7828 305.422C49.5904 303.368 48.0347 301.549 46.1915 300.053C45.0327 299.121 43.6531 298.504 42.1861 298.262C40.7191 298.02 39.2145 298.161 37.8179 298.671C34.4138 299.921 32.4333 303.399 28.9715 304.502C27.4961 304.996 26.1014 305.704 24.8319 306.603C22.5205 308.264 19.4999 309.33 18.3285 312.156C16.5949 315.203 18.3285 318.576 19.542 321.465C20.5729 323.771 21.2189 326.231 21.4541 328.746C21.8166 331.562 23.7971 333.815 25.9088 335.575C27.5216 336.862 29.5861 337.881 31.7136 337.55C33.5575 336.825 35.165 335.612 36.9669 334.845C39.8666 333.605 42.467 331.54 45.6714 331.168C47.5153 330.821 49.6008 331.041 51.1558 329.812C55.0589 326.939 56.388 321.727 55.9835 317.147ZM25.5149 312.555C24.0229 313.942 23.0301 315.707 22.0005 317.462C22.1423 313.322 25.5043 310.275 28.7771 308.221C28.0168 309.884 26.9015 311.36 25.5096 312.545L25.5149 312.555ZM34.8183 325.688C32.8273 325.956 31.0728 326.986 29.2289 327.716C29.108 328.809 28.9767 329.901 28.8454 330.999C28.0049 328.83 27.1118 326.681 26.3921 324.47C27.2747 325.231 28.1415 326.014 29.0187 326.813C30.5422 325.951 32.0183 324.848 33.7887 324.569C35.4361 324.456 37.0913 324.562 38.7109 324.885C37.432 325.221 36.1338 325.479 34.8235 325.657L34.8183 325.688ZM39.5777 322.904C39.1417 321.517 39.315 320.031 39.2572 318.602C37.9282 318.56 36.5098 318.176 35.2333 318.728C33.9059 319.315 32.5426 319.817 31.1515 320.23C31.7714 319.216 32.1076 317.719 33.4314 317.388C34.9061 316.955 36.2601 316.185 37.3871 315.14C37.1822 315.797 36.9774 316.459 36.7777 317.131L39.1417 318.04C39.9664 316.054 41.0749 314.158 42.8189 312.865C41.9154 315.823 39.9664 318.644 40.3184 321.843C40.8437 323.65 42.6456 324.633 43.8958 325.904C42.2673 325.252 40.3131 324.633 39.5514 322.873L39.5777 322.904ZM43.5334 328.951C44.4737 326.807 46.2965 324.801 48.8496 324.995C47.3091 326.593 45.51 327.92 43.5281 328.919L43.5334 328.951ZM51.8492 318.302C51.1032 317.373 51.1873 316.091 50.9194 314.988C50.6357 312.886 49.7111 310.995 48.9914 309.041C52.6372 310.407 52.0278 315.124 51.8439 318.271L51.8492 318.302Z"
                                                    fill={colorLR6}/>}
                                {imLL6 ? '' : <path onClick={handleAdd} id="LL6"
                                                    d="M222.363 320.299C222.064 315.944 220.719 311.016 216.81 308.542C214.709 306.835 212.976 304.56 210.407 303.473C205.553 301.261 200.079 299.317 194.705 300.604C193.218 301.024 191.844 301.772 190.684 302.793C189.524 303.814 188.607 305.082 188.002 306.504C185.528 311.232 185.774 316.732 185.69 321.922C185.732 324.922 185.438 328.226 187.188 330.852C187.871 331.998 189.215 332.392 190.366 332.896C193.16 333.947 195.178 336.347 198.02 337.298C201.424 338.506 205.091 339.336 208.715 338.948C212.571 338.354 215.213 335.176 217.719 332.486C220.787 329.229 222.731 324.811 222.363 320.299ZM197.789 305.064C199.112 304.381 200.21 305.469 201.088 306.325C199.102 306.099 197.079 306.21 195.561 307.675C195.798 306.446 196.475 305.311 197.804 305.064H197.789ZM190.114 321.454C190.433 323.389 190.608 325.346 190.639 327.306C189.483 325.62 188.469 323.204 190.129 321.46L190.114 321.454ZM209.624 337.214C210.622 335.113 211.725 333.011 213.501 331.472C213.695 334.099 211.736 335.985 209.64 337.198L209.624 337.214ZM206.43 324.212C205.369 325.523 203.973 326.521 202.39 327.102C199.984 327.863 198.55 330.043 196.712 331.609C197.584 329.891 198.288 327.9 199.921 326.755C201.723 325.788 203.667 325.09 205.364 323.929L204.991 322.563C205.432 321.964 205.873 321.37 206.32 320.782C202.39 319.542 197.552 319.857 194.763 316.322C194.159 317.247 193.544 318.166 192.908 319.075C193.308 317.152 193.807 315.256 194.358 313.375C195.53 314.888 196.617 316.653 198.461 317.425C201.088 318.602 203.951 319.048 206.735 319.689C205.768 317.105 204.633 314.573 204.024 311.873C205.694 314.58 207.051 317.469 208.069 320.483C207.638 321.47 207.218 322.467 206.808 323.472C209.188 324.575 211.699 325.347 214.163 326.224C211.506 325.927 208.906 325.244 206.446 324.197L206.43 324.212ZM217.672 323.944C217.635 321.112 218.341 318.318 219.721 315.844C220.288 318.723 219.211 321.528 217.688 323.929L217.672 323.944Z"
                                                    fill={colorLL6}/>}
                                {imLr5 ? '' : <path onClick={handleAdd} id="LR5"
                                                    d="M59.4769 334.514C55.4057 332.47 50.7093 331.388 46.1811 332.302C42.8505 332.77 40.1872 334.971 37.1666 336.258C34.8184 337.309 32.0762 338.638 31.388 341.353C31.0298 344.464 31.0793 347.607 31.5351 350.704C31.803 352.911 34.4139 353.299 36.1947 353.525C41.9654 353.973 47.7542 352.929 53.005 350.494C57.2443 348.435 61.4101 344.758 61.6991 339.746C61.615 337.881 61.4416 335.375 59.4769 334.514ZM45.4666 338.869C45.8133 337.897 46.0602 336.899 46.3544 335.916C46.6959 336.941 47.3158 338.018 46.8797 339.121C46.1968 341.222 44.0062 342.22 41.9995 342.635C43.1867 341.432 44.9361 340.592 45.4666 338.869ZM45.598 350.589C45.9657 349.627 45.9552 348.183 47.1372 347.81C47.8208 347.762 48.5064 347.752 49.1912 347.778C48.0617 348.799 46.8609 349.738 45.598 350.589ZM47.1739 345.299C47.1739 345.992 47.1739 346.68 47.1739 347.4C46.5646 346.58 45.9657 345.756 45.3668 344.931C44.3162 346.066 43.2655 347.179 42.0941 348.214C42.4841 346.369 43.4969 344.715 44.9623 343.528C45.1024 342.828 45.2443 342.15 45.3878 341.495C45.9132 342.262 46.3912 343.04 46.8955 343.823C48.0407 343.886 49.1894 343.961 50.3416 344.048L47.1739 345.299ZM55.5108 344.337L54.5389 344.054C53.7877 341.275 54.8068 338.212 53.2939 335.648C54.0661 336.174 55.6106 336.085 55.5948 337.303C55.7262 339.651 54.5547 342.01 55.5318 344.337H55.5108Z"
                                                    fill={colorLR5}/>}
                                {imLL5 ? '' : <path onClick={handleAdd} id="LL5"
                                                    d="M206.199 345.409C204.418 341.107 199.638 339.573 196.029 337.203C192.635 334.876 188.438 333.3 184.298 334.251C180.873 335.05 178.178 337.928 177.191 341.238C176.377 344.001 175.578 346.859 175.746 349.764C175.83 351.424 176.755 353.241 178.462 353.714C180.858 354.271 183.458 353.751 185.759 354.796C189.468 356.309 191.385 360.517 195.388 361.505C199.17 362.503 202.811 359.682 204.24 356.325C205.669 352.968 207.334 349.112 206.199 345.409ZM194.605 344.18C191.931 346.701 191.311 350.52 191.096 354.024C189.867 350.421 190.571 345.861 193.954 343.691C193.197 343.134 192.446 342.588 191.684 342.047C194.08 342.693 197.08 342.425 198.818 344.469C197.405 344.411 196.013 344.174 194.605 344.18ZM204.586 349.706C203.861 353.005 201.492 355.653 199.091 357.896C199.874 356.02 201.046 354.355 202.091 352.643C203.305 350.657 203.352 348.267 203.667 346.034C204.24 347.164 204.965 348.377 204.607 349.717L204.586 349.706Z"
                                                    fill={colorLL5}/>}
                                {imLr4 ? '' : <path onClick={handleAdd} id="LR4"
                                                    d="M66.1434 354.802C63.811 353.662 61.7727 351.886 59.2512 351.151C57.0501 350.804 54.891 351.639 52.8055 352.233C48.4558 353.651 44.1429 356.257 42.0206 360.47C41.3052 361.892 40.9529 363.469 40.9951 365.06C41.0372 366.651 41.4726 368.207 42.2623 369.589C43.4863 372.101 45.5928 374.501 48.5136 374.885C51.412 375.117 54.2998 374.323 56.6718 372.642C59.2091 370.819 62.1772 369.49 64.0841 366.889C66.9261 363.58 67.1993 358.868 66.1434 354.802ZM43.6281 364.898C45.6559 364.116 44.6367 367 44.9624 368.082C44.2217 367.163 43.46 366.149 43.6281 364.898ZM49.6746 360.449C51.0929 359.54 52.5796 358.752 54.0768 357.985C53.7353 358.637 53.3991 359.304 53.0576 359.96C54.1083 361.142 55.4741 362.246 55.7788 363.879C55.6317 365.082 54.8017 366.049 54.2028 367.073C54.3394 366.023 54.5128 364.94 54.7019 363.879C53.9402 362.949 53.1575 362.041 52.3747 361.132C51.4922 360.885 50.5834 360.675 49.6746 360.449ZM53.4096 370.493C53.7353 369.642 53.5725 368.392 54.518 367.908C55.3613 367.699 56.2206 367.56 57.0869 367.493C55.9383 368.584 54.7091 369.587 53.4096 370.493ZM58.4632 355.527C61.5311 356.052 62.8759 359.094 63.1648 361.857C61.6676 359.698 59.9814 357.68 58.4632 355.527Z"
                                                    fill={colorLR4}/>}
                                {imLL3 ? '' : <path onClick={handleAdd} id="LL3"
                                                    d="M184.871 383.248C184.734 382.216 184.229 381.268 183.448 380.579C180.84 379.793 178.363 378.628 176.093 377.123C174.89 376.324 173.751 375.432 172.689 374.454C171.108 373.487 169.69 372.276 168.486 370.866C167.557 369.815 166.821 368.57 165.629 367.814C163.743 366.926 160.838 367.163 159.945 369.327C157.35 375.494 157.576 382.596 159.845 388.832C160.717 391.212 161.668 393.807 163.843 395.32C165.557 396.466 167.547 397.132 169.606 397.249C171.665 397.366 173.718 396.931 175.552 395.987C177.953 394.642 179.865 392.614 181.74 390.639C183.616 388.664 185.192 386.069 184.871 383.248ZM161.048 372.116C160.922 375.126 160.454 378.136 160.696 381.157C160.838 383.3 161.363 385.36 161.673 387.508C159.278 382.875 158.022 376.76 161.048 372.116ZM174.412 389.641C172.384 390.692 170.735 392.268 169.028 393.786C169.915 391.942 171.171 390.24 173.009 389.258C176.203 387.529 178.205 384.078 181.856 383.122C179.613 385.517 177.391 388.065 174.412 389.641Z"
                                                    fill={colorLL3}/>}
                                {imLL4 ? '' : <path onClick={handleAdd} id="LL4"
                                                    d="M198.151 363.979C195.793 362.125 192.593 361.689 190.377 359.603C187.971 357.612 185.885 354.597 182.497 354.392C178.63 354.15 174.191 353.956 171.087 356.693C168.024 359.073 167.935 363.427 168.523 366.921C169.737 369.989 172.589 371.848 175.011 373.939H175.042C177.166 375.432 179.396 376.769 181.714 377.937L183.589 377.974C187.519 377.023 192.483 376.965 194.663 373.015C196.192 370.204 198.487 367.357 198.151 363.979ZM177.338 361.352C177.664 360.202 178.972 360.008 179.902 359.572C179.098 361.216 178.247 362.844 177.422 364.483C177.359 363.464 177.054 362.387 177.338 361.373V361.352ZM177.595 369.364C178.646 369.6 179.833 369.568 180.747 370.215C181.251 370.829 181.695 371.49 182.071 372.19C180.458 371.496 178.609 370.94 177.595 369.385V369.364ZM181.851 369.568C182.47 367.178 183.18 364.378 185.759 363.406C184.934 365.733 183.599 367.846 181.851 369.589V369.568ZM184.939 362.382C184.414 361.573 185.265 360.712 185.423 359.939C185.995 361.26 186.496 362.61 186.925 363.984C186.207 363.532 185.541 363.001 184.939 362.403V362.382ZM191.065 373.514C190.014 374.527 188.48 374.738 187.114 375.09C188.428 374.081 189.967 373.293 190.986 371.938C192.037 370.02 192.431 367.835 193.455 365.907C193.754 367.276 193.691 368.7 193.272 370.038C192.853 371.376 192.092 372.581 191.065 373.535V373.514Z"
                                                    fill={colorLL4}/>}
                                {imLr3 ? '' : <path onClick={handleAdd} id="LR3"
                                                    d="M75.4992 369.421C75.2313 368.455 74.0914 368.691 73.3717 368.896C71.3649 369.563 69.6051 370.997 67.4461 371.165C64.7669 371.47 61.7936 370.761 59.3981 372.337C57.3494 373.592 55.1956 375.489 55.2481 378.115C55.1641 381.309 55.9258 384.419 56.4458 387.571C57.0289 390.471 57.8327 393.696 60.3122 395.577C61.9302 396.875 64.1418 396.549 66.0329 396.186C69.1849 395.504 72.6782 394.395 74.5274 391.511C76.7915 387.781 77.7581 383.395 78.1573 379.098C78.1206 375.736 76.9701 372.431 75.4992 369.421ZM61.9039 391.963C58.8623 388.942 56.3145 384.861 57.0762 380.406C58.4946 383.332 59.0409 386.662 61.0004 389.336C62.2349 391.438 64.4622 392.578 66.4532 393.849C64.8615 393.434 63.1174 393.161 61.9039 391.963ZM74.8321 376.639C76.4868 378.699 75.7199 381.472 74.8951 383.715C74.3806 381.387 74.3591 378.977 74.8321 376.639Z"
                                                    fill={colorLR3}/>}
                                {imUL6 ? '' : <path onClick={handleAdd} id="UL6"
                                                    d="M223.041 100.714C222.757 97.9093 221.013 95.5663 220.151 92.9345C218.948 89.7195 218.859 86.037 216.774 83.195C214.987 80.9729 212.219 79.833 209.556 79.0555C208.273 78.6764 206.904 78.7039 205.637 79.1343C204.682 79.9344 203.684 80.6814 202.648 81.3722C198.676 84.011 194.233 85.8589 189.562 86.8145C189.037 87.2873 188.475 87.7653 187.939 88.2539C185.937 89.9979 183.967 92.1255 183.736 94.9097C183.043 101.087 185.648 107.113 188.9 112.245C190.418 114.546 192.283 116.973 195.067 117.735C196.091 118.064 197.148 118.276 198.219 118.365C202.485 118.717 206.85 117.199 210.417 114.893C212.933 113.69 214.914 111.778 216.842 109.813C217.693 108.952 218.528 108.079 219.4 107.255C221.107 105.406 223.272 103.409 223.041 100.714ZM194.589 108.516C193.296 105.458 193.139 102.04 194.143 98.8759C194.453 101.161 194.421 103.488 194.889 105.752C195.414 108.232 197.694 109.64 199.254 111.421C197.489 110.916 195.398 110.344 194.589 108.5V108.516ZM212.387 94.8572C209.761 95.6767 207.018 95.9603 204.465 96.9584C203.299 98.9179 203.105 101.623 204.434 103.562C205.484 105.085 206.877 106.293 208.111 107.628C206.099 106.419 204.092 104.954 203.021 102.8C202.275 101.418 202.495 99.8057 202.469 98.3033C201.734 99.4117 201.061 100.615 200.021 101.481C199.018 102.222 197.762 102.469 196.596 102.847C199.596 101.15 201.371 98.1824 203.247 95.414C201.881 91.9679 197.536 92.6718 194.763 91.2797L194.363 89.7038C196.953 89.6775 199.617 89.7563 202.065 88.8632C201.203 89.5987 200.328 90.3201 199.438 91.0276C201.634 91.7367 203.641 93.0921 204.434 95.3562C207.027 94.6641 209.698 94.3127 212.382 94.3108C212.082 92.4512 211.92 90.476 212.933 88.7897C213.459 91.1904 213.564 93.6489 213.905 96.0759L212.387 94.8572Z"
                                                    fill={colorUL6}/>}
                                {imLr2 ? '' : <path onClick={handleAdd} id="LR2"
                                                    d="M93.0396 388.59C92.8295 385.701 92.3882 382.418 90.0873 380.39C89.2253 380.425 88.3749 380.602 87.571 380.915C85.9083 381.581 84.3941 382.571 83.1163 383.826C80.4253 386.338 78.2144 389.32 76.5918 392.625C75.4099 395.083 74.3067 397.878 75.0159 400.641C75.6462 402.816 77.8684 404.051 79.9749 404.413C83.1846 405.196 86.9144 404.55 89.2205 402.049C92.7087 398.529 93.3548 393.266 93.0396 388.59ZM80.6158 402.249C82.0657 401.918 83.7047 401.245 85.0915 402.159C84.4191 403.872 81.9501 402.595 80.6158 402.249ZM89.2836 396.68C88.9211 393.429 88.5534 389.704 90.6074 386.909C90.9016 390.229 90.0821 393.513 89.2836 396.696V396.68Z"
                                                    fill={colorLR2}/>}
                                {imLL2 ? '' : <path onClick={handleAdd} id="LL2"
                                                    d="M160.239 394.553C157.533 390.214 154.676 385.832 150.604 382.638C149.966 382.103 149.212 381.722 148.402 381.525C147.592 381.329 146.748 381.321 145.934 381.504C144.777 382.462 143.883 383.698 143.334 385.097C142.809 386.909 143.071 388.821 143.077 390.681C143.239 394.884 142.914 399.086 143.129 403.32C143.14 404.131 143.458 404.908 144.02 405.493C144.582 406.078 145.345 406.428 146.155 406.472C148.755 406.583 151.24 405.663 153.73 405.033C156.189 404.308 158.926 403.604 160.591 401.492C162.146 399.433 161.426 396.58 160.239 394.553ZM145.819 400.452C144.81 397.878 145.041 395.062 145.393 392.383C147.332 394.616 146.081 397.836 145.819 400.452ZM159.577 402.028C159.346 400.121 159.167 398.204 159.052 396.286C159.682 397.164 160.764 397.92 160.628 399.128C160.591 400.147 159.992 401.072 159.577 402.007V402.028Z"
                                                    fill={colorLL2}/>}
                                {imLr1 ? '' : <path onClick={handleAdd} id="LR1"
                                                    d="M116.128 403.898C115.65 400.956 114.415 398.204 113.69 395.32C112.823 392.304 112.666 389.042 111.132 386.253C110.002 384.225 107.675 383.469 105.726 382.491C104.008 383.411 102.249 384.451 101.235 386.169C98.7342 390.224 98.3665 395.199 95.929 399.302C94.9414 401.051 93.4337 402.496 92.6982 404.392C92.8926 406.178 94.4423 407.47 95.6926 408.631C99.5274 411.783 104.733 411.946 109.451 411.689C111.368 411.657 112.855 410.265 114.074 408.936C115.292 407.607 116.464 405.826 116.128 403.898ZM99.2542 408.705C102.995 409.188 106.761 408.999 110.522 409.151C107.097 411.258 102.653 410.465 99.2542 408.705ZM110.039 395.472C111.473 397.573 111.589 400.237 112.067 402.674C111.174 401.726 110.523 400.576 110.17 399.322C109.817 398.068 109.772 396.747 110.039 395.472Z"
                                                    fill={colorLR1}/>}
                                {imLL1 ? '' : <path onClick={handleAdd} id="LL1"
                                                    d="M138.837 402.249C138.201 395.677 134.251 389.699 128.908 385.964C128.073 385.438 127.012 384.677 126.009 385.255C124.845 386.053 123.986 387.221 123.571 388.569C122.169 392.357 123.146 396.565 121.685 400.342C120.598 403.173 118.959 406.204 119.805 409.314C121.155 411.111 123.608 411.531 125.715 411.694C128.977 411.894 132.544 411.81 135.249 409.735C136.471 408.93 137.45 407.808 138.082 406.49C138.714 405.171 138.975 403.705 138.837 402.249ZM124.128 403.121C124.653 399.864 124.653 396.381 126.172 393.397C126.716 396.776 125.987 400.237 124.128 403.11V403.121Z"
                                                    fill={colorLL1}/>}

                                //implant
                                {Implant ?
                                    <circle onClick={() => setImUL5((prev) => !prev)} id="imUL5" cx="195" cy="71" r="4"
                                            fill={imUL5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL6((prev) => !prev)} id="imUL6" cx="204" cy="99" r="4"
                                            fill={imUL6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL7((prev) => !prev)} id="imUL7" cx="210" cy="129" r="4"
                                            fill={imUL7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL8((prev) => !prev)} id="imUL8" cx="216" cy="157" r="4"
                                            fill={imUL8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL4((prev) => !prev)} id="imUL4" cx="185" cy="52" r="4"
                                            fill={imUL4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL3((prev) => !prev)} id="imUL3" cx="173" cy="36" r="4"
                                            fill={imUL3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL2((prev) => !prev)} id="imUL2" cx="155" cy="21" r="4"
                                            fill={imUL2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUL1((prev) => !prev)} id="imUL1" cx="134" cy="15" r="4"
                                            fill={imUL1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr1((prev) => !prev)} id="imUr1" cx="112" cy="15" r="4"
                                            fill={imUr1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr2((prev) => !prev)} id="imUr2" cx="89" cy="20" r="4"
                                            fill={imUr2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr3((prev) => !prev)} id="imUr3" cx="70" cy="33" r="4"
                                            fill={imUr3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr4((prev) => !prev)} id="imUr4" cx="57" cy="51" r="4"
                                            fill={imUr4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr5((prev) => !prev)} id="imUr5" cx="46" cy="69" r="4"
                                            fill={imUr5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr6((prev) => !prev)} id="imUr6" cx="35" cy="95" r="4"
                                            fill={imUr6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr7((prev) => !prev)} id="imUr7" cx="26" cy="127" r="4"
                                            fill={imUr7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImUr8((prev) => !prev)} id="imUr8" cx="21" cy="156" r="4"
                                            fill={imUr8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr8((prev) => !prev)} id="imLr8" cx="23" cy="257" r="4"
                                            fill={imLr8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr7((prev) => !prev)} id="imLr7" cx="28" cy="286" r="4"
                                            fill={imLr7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr6((prev) => !prev)} id="imLr6" cx="36" cy="319" r="4"
                                            fill={imLr6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr5((prev) => !prev)} id="imLr5" cx="45" cy="343" r="4"
                                            fill={imLr5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr4((prev) => !prev)} id="imLr4" cx="52" cy="363" r="4"
                                            fill={imLr4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr3((prev) => !prev)} id="imLr3" cx="66" cy="383" r="4"
                                            fill={imLr3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr2((prev) => !prev)} id="imLr2" cx="84" cy="394" r="4"
                                            fill={imLr2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLr1((prev) => !prev)} id="imLr1" cx="105" cy="400" r="4"
                                            fill={imLr1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL1((prev) => !prev)} id="imLL1" cx="129" cy="400" r="4"
                                            fill={imLL1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL2((prev) => !prev)} id="imLL2" cx="152" cy="397" r="4"
                                            fill={imLL2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL3((prev) => !prev)} id="imLL3" cx="170" cy="386" r="4"
                                            fill={imLL3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL4((prev) => !prev)} id="imLL4" cx="185" cy="368" r="4"
                                            fill={imLL4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL5((prev) => !prev)} id="imLL5" cx="193" cy="350" r="4"
                                            fill={imLL5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL6((prev) => !prev)} id="imLL6" cx="205" cy="322" r="4"
                                            fill={imLL6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL7((prev) => !prev)} id="imLL7" cx="218" cy="290" r="4"
                                            fill={imLL7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                {Implant ?
                                    <circle onClick={() => setImLL8((prev) => !prev)} id="imLL8" cx="221" cy="263" r="4"
                                            fill={imLL8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                                // bridge
                                {Bridge ?
                                    <circle onClick={() => setBr11((prev) => !prev)} id="Br11" cx="179" cy="43" r="4"
                                            fill={Br11 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr12((prev) => !prev)} id="Br12" cx="190" cy="62" r="4"
                                            fill={Br12 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr13((prev) => !prev)} id="Br13" cx="198" cy="83" r="4"
                                            fill={Br13 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr14((prev) => !prev)} id="Br14" cx="210" cy="114" r="4"
                                            fill={Br14 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr15((prev) => !prev)} id="Br15" cx="215" cy="142" r="4"
                                            fill={Br15 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr16((prev) => !prev)} id="Br16" cx="221" cy="274" r="4"
                                            fill={Br16 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr17((prev) => !prev)} id="Br17" cx="212" cy="302" r="4"
                                            fill={Br17 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr18((prev) => !prev)} id="Br18" cx="200" cy="338" r="4"
                                            fill={Br18 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr19((prev) => !prev)} id="Br19" cx="190" cy="358" r="4"
                                            fill={Br19 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr20((prev) => !prev)} id="Br20" cx="177" cy="378" r="4"
                                            fill={Br20 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr21((prev) => !prev)} id="Br21" cx="160" cy="391" r="4"
                                            fill={Br21 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr22((prev) => !prev)} id="Br22" cx="141" cy="398" r="4"
                                            fill={Br22 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr23((prev) => !prev)} id="Br23" cx="117" cy="401" r="4"
                                            fill={Br23 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr24((prev) => !prev)} id="Br24" cx="93" cy="398" r="4"
                                            fill={Br24 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr25((prev) => !prev)} id="Br25" cx="76" cy="390" r="4"
                                            fill={Br25 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr26((prev) => !prev)} id="Br26" cx="61" cy="371" r="4"
                                            fill={Br26 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr27((prev) => !prev)} id="Br27" cx="49" cy="352" r="4"
                                            fill={Br27 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr28((prev) => !prev)} id="Br28" cx="41" cy="334" r="4"
                                            fill={Br28 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr29((prev) => !prev)} id="Br29" cx="31" cy="303" r="4"
                                            fill={Br29 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr30((prev) => !prev)} id="Br30" cx="26" cy="271" r="4"
                                            fill={Br30 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr10((prev) => !prev)} id="Br10" cx="164" cy="26" r="4"
                                            fill={Br10 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr9((prev) => !prev)} id="Br9" cx="145" cy="16" r="4"
                                            fill={Br9 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr8((prev) => !prev)} id="Br8" cx="123" cy="14" r="4"
                                            fill={Br8 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ? <circle onClick={() => setBr7((prev) => !prev)} id="Br7" cx="99" cy="16" r="4"
                                                  fill={Br7 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ? <circle onClick={() => setBr6((prev) => !prev)} id="Br6" cx="79" cy="27" r="4"
                                                  fill={Br6 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ? <circle onClick={() => setBr5((prev) => !prev)} id="Br5" cx="63" cy="44" r="4"
                                                  fill={Br5 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ? <circle onClick={() => setBr4((prev) => !prev)} id="Br4" cx="52" cy="61" r="4"
                                                  fill={Br4 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ? <circle onClick={() => setBr3((prev) => !prev)} id="Br3" cx="42" cy="80" r="4"
                                                  fill={Br3 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr2((prev) => !prev)} id="Br2" cx="30" cy="114" r="4"
                                            fill={Br2 ? "#C02727" : "#DADADA"}/> : ''}
                                {Bridge ?
                                    <circle onClick={() => setBr1((prev) => !prev)} id="Br1" cx="23" cy="143" r="4"
                                            fill={Br1 ? "#C02727" : "#DADADA"}/> : ''}
                                // bridge
                            </g>
                            <defs>
                                <clipPath id="clip0_158_1321">
                                    <rect width="239" height="413.275" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                </div>}

        </>
    )
}
