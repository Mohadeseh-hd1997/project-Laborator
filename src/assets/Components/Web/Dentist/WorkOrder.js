import React from 'react';
import {Link} from 'react-router-dom';
// mui
import Avatar from '@mui/material/Avatar';
import { Button} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import Slide from '@mui/material/Slide';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CheckBox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AdapterJalali from '@date-io/date-fns-jalali';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// img 
import profile from '../../../img/profile.svg';
import Chevronleft from '../../../img/Chevronleft.svg';
import ChevronDown from '../../../img/ChevronDown.svg';
import Chat from '../../../img/Chat.svg';
import date from '../../../img/date.svg';


// varibles 
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
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
        }
    }
}));


export default function WorkOrder() {

    //-------------Functions states-----------------
    const classes = useStyles();
    const [teeth, setTeeth] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [isForcePickerOpen, setIsOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [value, setValue] = React.useState(0);
    const [treatment, settreatment] = React.useState(false);
    const [design, setDesign] = React.useState(false);
    const [Material, setMaterial] = React.useState(false);
    const [Prostheticcolor, setProstheticcolor] = React.useState(false);
    const [ColorBase, setColorBase] = React.useState(false);
    const [filesToUpload, setFilesToUpload] = React.useState([])

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
    const [Post, setPost] = React.useState(false);
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

    // -----------color teeth ------------------
    const [colorUR1, setColorUR1] = React.useState('white');
    const [colorUR2, setColorUR2] = React.useState('white');
    const [colorUR3, setColorUR3] = React.useState('white');
    const [colorUR4, setColorUR4] = React.useState('white');
    const [colorUR5, setColorUR5] = React.useState('white');
    const [colorUR6, setColorUR6] = React.useState('white');
    const [colorUR7, setColorUR7] = React.useState('white');
    const [colorUR8, setColorUR8] = React.useState('white');
    const [colorUL1, setColorUL1] = React.useState('white');
    const [colorUL2, setColorUL2] = React.useState('white');
    const [colorUL3, setColorUL3] = React.useState('white');
    const [colorUL4, setColorUL4] = React.useState('white');
    const [colorUL5, setColorUL5] = React.useState('white');
    const [colorUL6, setColorUL6] = React.useState('white');
    const [colorUL7, setColorUL7] = React.useState('white');
    const [colorUL8, setColorUL8] = React.useState('white');
    const [colorLR1, setColorLR1] = React.useState('white');
    const [colorLR2, setColorLR2] = React.useState('white');
    const [colorLR3, setColorLR3] = React.useState('white');
    const [colorLR4, setColorLR4] = React.useState('white');
    const [colorLR5, setColorLR5] = React.useState('white');
    const [colorLR6, setColorLR6] = React.useState('white');
    const [colorLR7, setColorLR7] = React.useState('white');
    const [colorLR8, setColorLR8] = React.useState('white');
    const [colorLL1, setColorLL1] = React.useState('white');
    const [colorLL2, setColorLL2] = React.useState('white');
    const [colorLL3, setColorLL3] = React.useState('white');
    const [colorLL4, setColorLL4] = React.useState('white');
    const [colorLL5, setColorLL5] = React.useState('white');
    const [colorLL6, setColorLL6] = React.useState('white');
    const [colorLL7, setColorLL7] = React.useState('white');
    const [colorLL8, setColorLL8] = React.useState('white');
    const [TeethIDD, setTeethIDD] = React.useState('white');

    //--------------Functions-----------------------


    const handleAdd = (value) => {
        const abc = [...teeth, [value.target.id]];
        setTeeth(abc);
        setTeethIDD([value.target.id])
    }
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

    const ProstheticcolorHandle = () => {
        setProstheticcolor((prev) => !prev);
    };

    const ColorBaseHandle = () => {
        setColorBase((prev) => !prev);
    };


    return (
        <div style={{
            maxWidth: '1410px',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            marginLeft: 40,
            marginRight: 39
        }}>
            <div style={{
                paddingTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <Avatar style={{backgroundColor: '#DADADA', padding: 1, fontSize: "1.5rem", color: '#6A6A6A'}}
                        alt="بهناز" src={profile}/>
                <h5 style={{
                    paddingRight: 5,
                    color: '#6A6A6A',
                    fontWeight: 'bolder',
                    width: 236,
                    textAlign: 'center'
                }}>بهناز جعفری - شماره پرونده 23914</h5>
                <img style={{paddingRight: 40, fontWeight: 'bolder'}} src={Chevronleft}/>
            </div>
            <div>
                <h6 style={{color: '#6A6A6A'}}>معرفی درمان جدید</h6>
            </div>
            <div style={{marginBottom: 20}}>
                <span style={{fontWeight: 'bold'}}>قالب سنتی ( گچی )</span>
            </div>
            <div>
                <svg width="239" height="414" viewBox="0 0 239 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="239" height="413.275" fill="white"/>
                    <g clip-path="url(#clip0_158_1321)">
                        //teeth
                        <path
                            d="M181.031 19.3686C182.607 20.6346 186.725 24.2383 188.632 29.2919C189.386 31.2884 189.69 33.4262 189.525 35.5537C189.478 37.0929 189.242 37.9177 188.632 38.4115C187.792 39.0944 186.568 38.879 185.68 38.6794C180.763 37.6288 178.325 37.0719 176.382 35.0022C171.696 30.0011 174.076 22.51 175.221 20.5138C175.516 19.9673 175.946 19.5059 176.471 19.1742C178.236 18.1341 180.469 19.1059 181.031 19.3686Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M238.123 266.569C238.123 269.195 238.821 271.822 238.648 274.449C238.186 277.942 236.294 280.994 234.971 284.193C234.688 285.287 234.537 286.41 234.519 287.54L233.631 287.44C233.732 286.531 233.648 285.61 233.384 284.734C232.066 282.139 229.591 280.406 227.495 278.488C228.919 277.732 229.954 279.308 231.015 280.007C230.637 279.245 230.269 278.478 229.928 277.711H229.717L229.749 276.734C230.677 277.029 231.644 277.183 232.617 277.191C234.193 277.285 235.07 275.741 235.407 274.433C236.326 270.677 235.837 266.779 235.932 262.96C235.837 259.75 236.011 256.257 234.246 253.431C232.428 250.977 229.313 250.142 226.586 249.134C223.839 248.325 221.071 246.995 218.139 247.379C213.863 248.204 209.314 249.601 206.335 252.968C203.767 256.646 204.759 261.374 204.334 265.55C203.966 268.035 205.069 270.729 207.354 271.906C207.865 272.205 208.415 272.43 208.988 272.573L208.741 273.466C207.439 273.036 206.041 272.253 204.691 272.894C202.632 273.682 202.064 275.983 201.25 277.795C199.228 282.523 197.421 287.597 198.098 292.809C198.387 295.204 199.638 296.684 201.896 298.75C204.25 299.443 206.84 299.275 209.067 300.4C212.403 302.044 214.814 304.959 217.372 307.57C217.681 307.898 218.018 308.197 218.381 308.463L217.062 308.941C214.961 307.234 213.228 304.959 210.659 303.872C205.805 301.66 200.331 299.717 194.957 301.004C193.47 301.424 192.096 302.171 190.936 303.192C189.776 304.213 188.859 305.481 188.254 306.903C185.78 311.631 186.026 317.131 185.942 322.321C185.984 325.321 185.69 328.625 187.44 331.252C188.122 332.397 189.467 332.791 190.618 333.295C192.887 334.136 194.647 335.89 196.748 337.025L196.344 337.666L196.265 337.613C192.871 335.286 188.674 333.71 184.535 334.661C181.109 335.46 178.415 338.338 177.427 341.648C176.613 344.411 175.814 347.269 175.982 350.174C176.066 351.834 176.991 353.651 178.698 354.124C179.452 354.284 180.218 354.38 180.989 354.413V354.707C177.59 354.565 173.981 354.776 171.338 357.103C168.276 359.482 168.187 363.837 168.775 367.331C170.093 370.661 173.34 372.584 175.877 374.89C173.718 373.645 171.596 372.263 170.009 370.294C169.08 369.243 168.344 367.998 167.152 367.241C165.266 366.354 162.361 366.59 161.468 368.754C158.873 374.922 159.099 382.024 161.368 388.259C162.24 390.639 163.191 393.234 165.366 394.747C167.079 395.893 169.068 396.559 171.126 396.678C173.184 396.796 175.236 396.362 177.07 395.42C179.47 394.075 181.383 392.047 183.258 390.072C185.133 388.097 186.683 385.502 186.363 382.681C186.231 380.847 184.566 379.734 183.416 378.51C183.983 378.362 184.577 378.236 185.181 378.116L185.244 378.436C186.368 380.317 187.87 382.355 187.308 384.682C186.783 388.806 183.347 391.511 180.584 394.248C175.904 398.902 167.283 399.381 162.686 394.343C160.984 396.029 163.27 398.314 162.634 400.326C161.951 403.825 158.274 405.296 155.211 406.173C151.728 407.024 148.114 408.637 144.495 407.707C141.584 406.436 141.71 402.806 141.973 400.153C141.19 400.116 140.397 400.079 139.625 400.058C139.914 402.969 140.245 406.231 138.427 408.747C136.184 412.13 131.882 413.265 128.031 413.223C124.879 413.223 121.254 413.007 118.948 410.596C117.861 407.901 118.806 404.928 119.636 402.291L117.083 402.228C117.11 404.329 117.546 406.73 116.201 408.568C114.788 410.67 112.923 412.913 110.228 413.123C105.905 413.422 101.345 413.365 97.389 411.368C94.9936 410.144 92.6612 408.337 91.579 405.8C91.2218 402.947 93.8274 400.993 95.2562 398.829C94.5523 398.493 93.8484 398.172 93.155 397.852C91.9152 401.645 89.11 405.369 84.9284 406.005C81.7135 406.325 78.0362 405.952 75.5462 403.688C73.3083 401.471 73.8809 398.046 74.2119 395.23C72.7069 395.358 71.2299 395.712 69.8307 396.281L69.6153 395.693C71.6798 394.952 73.5868 393.823 74.795 391.937C77.0591 388.207 78.0257 383.821 78.425 379.523C78.3882 376.14 77.2377 372.836 75.7668 369.826C75.4989 368.859 74.359 369.096 73.6656 369.301C71.6588 369.968 69.899 371.402 67.7399 371.57C65.0608 371.875 62.0875 371.166 59.692 372.742C59.3138 372.973 58.9303 373.23 58.5573 373.508L57.4121 372.71C59.8391 371.05 62.5603 369.71 64.3464 367.294C67.1883 363.984 67.4615 359.272 66.4056 355.212C64.0732 354.072 62.0349 352.296 59.5134 351.534C57.3123 351.188 55.1532 352.023 53.0677 352.616C52.5424 352.795 51.9803 352.989 51.4445 353.205L50.9192 351.849C51.7071 351.555 52.4811 351.231 53.2411 350.878C57.4804 348.818 61.6462 345.141 61.9351 340.13C61.8563 338.265 61.6935 335.759 59.7288 334.876C56.0778 333.043 51.9225 331.982 47.8408 332.444L47.7252 331.278C49.0438 331.147 50.3518 330.989 51.434 330.143C55.3108 327.301 56.6399 322.09 56.2354 317.499C55.8572 313.107 53.199 309.451 51.0347 305.774C49.8424 303.72 48.2866 301.901 46.4434 300.405C45.2847 299.473 43.905 298.857 42.438 298.615C40.971 298.372 39.4664 298.513 38.0698 299.023C34.6657 300.273 32.6853 303.751 29.2234 304.854C27.7481 305.348 26.3533 306.056 25.0839 306.956C22.7725 308.616 19.7519 309.682 18.5804 312.508C17.1515 315.025 18.0918 317.761 19.1372 320.262L18.1496 320.661C16.7103 317.094 14.8874 313.674 13.5636 310.06C12.576 307.686 10.5955 305.905 9.57114 303.551C8.73588 301.666 8.7674 299.564 8.63082 296.547C8.49949 293.67 7.42258 289.872 7.61169 285.99C7.71676 282.244 8.88296 278.457 7.93739 274.743C6.76593 270.771 3.32508 267.814 2.76824 263.606C1.87653 257.332 2.48319 250.936 4.53857 244.941C5.58921 241.905 7.79031 239.363 8.4312 236.169C9.71823 230.269 8.95652 224.197 9.45032 218.224C9.72874 214.867 10.9002 211.605 10.7006 208.211C10.5955 206.005 9.55013 204.008 8.9355 201.907C7.88486 198.661 8.05296 195.188 7.31226 191.879C5.7363 184.524 3.1097 177.464 1.39715 170.151C-0.121027 164.415 -0.283879 158.39 0.393785 152.522C1.48645 145.887 2.88906 139.236 5.61548 133.059C6.1408 131.924 5.8939 130.705 5.8151 129.502L6.86574 129.45C7.25448 132.496 10.1858 134.178 12.4552 135.801C16.726 138.501 20.2719 142.336 25.0366 144.206C29.3495 146.155 34.3715 144.852 38.3272 142.63C42.1936 140.408 43.78 135.969 45.0513 131.945C45.7447 129.67 46.7691 126.996 45.356 124.774C43.8681 122.678 42.2076 120.71 40.3917 118.891C39.6429 118.058 38.6227 117.518 37.513 117.367L37.6443 116.726C40.2942 117.345 43.0611 117.247 45.6607 116.443C48.4449 115.676 50.3098 113.254 51.828 110.953C55.0797 105.847 57.6853 99.8215 56.9919 93.6175C56.7607 90.8333 54.7908 88.7057 52.7893 86.9617C50.7798 85.1366 48.6376 83.4633 46.3804 81.9554C45.7811 81.5561 45.1442 81.2166 44.4787 80.9415L44.8412 80.0905C46.2153 80.6676 47.5491 81.3363 48.8336 82.0919C50.4831 83.048 51.497 84.7185 52.9784 85.8795C56.3615 86.2682 60.48 85.2964 62.1505 82.0079C63.6771 78.813 64.34 75.2739 64.0732 71.7431C64.0207 69.6418 62.6128 67.9923 61.0736 66.7526C60.224 66.0765 59.2269 65.6103 58.1633 65.392L58.4365 64.3781C61.0106 65.0453 63.821 64.231 65.9538 62.6971C68.7853 60.7009 71.4802 57.9692 72.0003 54.3708C72.1947 52.2327 71.8585 49.7059 70.0461 48.3033C67.2566 46.0602 63.5111 45.3195 60.9633 42.7139C58.7832 40.5863 55.8624 38.1331 52.5949 39.3623C49.1015 41.1064 47.0843 44.6838 44.0217 47.0058C43.3019 47.5396 42.7186 48.2363 42.3197 49.0387L41.4739 48.5134C42.0191 47.5773 42.7028 46.7289 43.5016 45.9971C46.3173 43.5597 48.5972 40.5391 51.7124 38.4535C51.4497 34.0251 54.0396 30.227 56.1514 26.5655C57.68 24.149 60.3171 22.8095 62.8282 21.6433C64.9925 20.6714 67.078 19.4737 69.3789 18.8328C71.1072 18.339 72.8986 18.7382 74.6321 19.0744C74.2907 14.9769 78.0415 12.4607 81.0516 10.4539C84.0315 8.43532 87.342 6.9543 90.833 6.078C92.803 5.55268 94.6784 6.54554 96.58 6.8975C97.9511 5.71553 98.9125 4.11855 100.389 3.04165C103.114 1.12961 106.368 0.115885 109.697 0.141874C112.482 0.141874 115.292 -0.215344 118.055 0.236432C120.062 0.604157 121.023 2.60563 121.89 4.22362C123.849 1.09796 127.852 0.404535 131.256 0.19966C136.263 0.0578233 141.852 1.13998 145.335 5.03261C145.86 5.4949 146.338 6.18307 147.121 6.08325C149.916 6.08325 152.611 6.88174 155.369 7.2127C160.622 8.14777 164.898 12.2138 166.674 17.157L166.458 17.1885H166.679C166.987 18.0416 167.217 18.9207 167.367 19.8151C167.467 20.6399 167.031 21.3911 166.758 22.1476C165.597 24.7059 164.609 27.3325 163.606 29.9381C162.109 33.7046 162.03 37.8547 162.308 41.8418C162.376 44.2636 164.993 45.2144 166.936 45.808C169.999 46.6748 173.618 48.1037 176.529 46.0654C181.104 43.5124 183.316 38.4956 185.086 33.8255C184.771 32.3283 183.81 31.0623 183.389 29.6229C184.44 26.7756 184.051 24.8477 183.741 23.9074C182.165 19.1795 175.289 16.0276 166.695 17.178C175.457 15.8122 182.659 18.8853 184.471 23.7656C184.834 24.7479 185.328 26.7336 184.393 29.6859C184.787 30.973 185.601 32.0866 185.969 33.3632C185.932 34.2291 185.832 35.0912 185.669 35.9425C186.667 36.9196 187.56 38.1016 188.821 38.7267C191.569 39.4727 195.004 38.774 197.174 41.0066C199.496 43.9799 199.496 47.9986 199.648 51.5918C201.954 52.6425 202.674 55.1115 203.325 57.3703C207.333 59.3928 208.825 63.9579 209.556 68.0869C209.802 70.3878 211.326 72.2107 212.587 74.0493L212.834 75.0159L213.884 74.8215C215.071 75.7198 216.295 76.5813 217.561 77.3798C217.646 78.6511 217.787 79.9801 217.997 81.3512C218.208 82.7223 218.47 83.9778 218.775 85.2596C218.428 84.0566 218.103 82.8169 217.814 81.5456C217.525 80.2743 217.288 79.0346 217.062 77.8211C215.203 75.9772 212.539 75.1157 209.96 75.0211C210.191 74.4958 210.433 73.9705 210.68 73.4452C210.391 72.9198 210.107 72.4313 209.829 71.927C209.76 72.7517 209.692 73.5765 209.634 74.4065L209.971 75.5097C208.033 78.736 205.307 81.4168 202.049 83.3002C198.708 85.0968 195.256 86.6938 191.779 88.2067C188.874 89.3204 185.858 91.3586 185.28 94.6576C184.703 99.6429 186.005 104.733 188.432 109.083C190.008 111.904 191.894 114.861 195.009 116.127C197.236 117.047 199.67 117.349 202.054 117C204.066 116.28 205.826 115.019 207.664 113.953C210.049 112.571 211.736 110.302 214.026 108.789C215.665 107.691 217.441 106.724 218.754 105.222C220.945 102.889 222.19 99.8951 223.272 96.9323L223.356 97.0899C223.356 97.0321 223.303 96.9795 223.272 96.9218L223.314 96.8114C226.592 102.59 229.271 108.784 230.358 115.382C231.503 120.714 231.188 126.198 230.663 131.577C230.563 139.1 236.305 144.857 238.144 151.855C240.056 158.337 238.469 165.192 236.147 171.344C235.023 174.69 233.132 177.884 233.111 181.504C232.959 185.465 234.992 189.116 234.876 193.061C234.876 195.892 233.668 198.493 232.885 201.156C231.582 205.527 230.495 210.002 230.295 214.573C230.111 217.788 230.889 220.955 231.677 224.028C233.405 230.453 235.78 236.704 237.156 243.229C238.727 250.925 238.091 258.799 238.123 266.569ZM232.045 156.819C232.123 153.714 232.26 150.221 230.258 147.626C227.837 144.589 223.681 143.948 220.041 143.775C216.621 143.717 213.165 143.533 209.776 144.027C206.708 144.694 204.187 146.722 201.896 148.755C200.504 150.011 198.944 151.634 199.317 153.693C199.737 156.798 201.634 159.419 203.199 162.051C204.14 163.758 205.826 165.203 205.852 167.304C206.025 168.759 205.758 170.782 207.428 171.481C210.17 172.158 213.038 171.612 215.833 171.859C218.46 171.953 220.939 173.435 223.608 172.909C226.045 172.515 228.026 170.745 229.229 168.665C231.262 165.066 231.74 160.859 232.045 156.819ZM227.69 133.179C227.768 128.024 227.139 122.882 225.82 117.898C225.142 115.324 223.718 112.723 221.296 111.452C219.442 110.822 217.42 111.111 215.518 111.494C210.428 112.471 206.966 116.884 202.064 118.323C199.595 118.943 197.368 120.214 195.235 121.538C194.09 122.295 192.535 123.114 192.645 124.727C192.698 131.125 193.633 137.802 197.179 143.281C198.114 144.757 199.669 146.176 201.555 145.908C204.612 145.519 207.024 143.281 210.044 142.756C213.879 142.157 217.735 142.851 221.575 143.045C222.263 143.124 222.961 143.03 223.603 142.77C224.245 142.51 224.812 142.094 225.252 141.558C227.138 139.247 227.558 136.095 227.69 133.19V133.179ZM205.027 79.2394C206.263 78.0698 207.229 76.6445 207.857 75.063C208.485 73.4815 208.76 71.7819 208.663 70.0831C208.484 66.222 207.228 62.2033 204.46 59.4033C203.362 58.2476 201.655 58.6574 200.257 58.8412C195.813 59.3981 192.519 62.6288 188.79 64.7616C183.536 67.945 178.446 73.4977 179.334 80.101C180.643 82.3125 182.571 84.0915 184.881 85.2176C188.033 86.7936 191.768 86.2682 194.967 85.0705C198.629 83.7152 202.185 81.9186 205.027 79.2394ZM195.046 58.3684C198.618 54.7595 199.249 49.1543 197.757 44.4685C197.258 42.7874 196.254 40.9908 194.39 40.6126C191.196 39.8351 187.781 39.2363 184.529 39.9296C183.3 41.5056 182.538 43.5071 180.705 44.5052C177.91 46.4699 173.797 47.5626 172.862 51.2766C171.612 54.728 173.324 58.1636 174.863 61.1947C176.34 64.5672 180.311 66.3376 183.794 66.243C187.692 63.9421 191.826 61.6622 195.046 58.3684ZM165.345 23.8023C165.97 22.3524 167.047 20.8343 166.469 19.19C165.919 17.1453 164.962 15.2328 163.655 13.5673C162.348 11.9017 160.718 10.5175 158.862 9.49784C156.272 8.04796 153.225 8.09523 150.41 7.39656C149.311 7.10136 148.164 7.02991 147.037 7.18643C147.49 8.78357 147.629 10.4534 147.447 12.1034C146.717 18.1761 146.113 24.3434 146.895 30.4371C147.158 32.239 147.946 34.5977 150.094 34.771C152.054 34.9496 154.35 35.2963 155.989 33.9148C157.885 32.4439 160.055 31.3617 161.94 29.8803C163.637 28.2203 164.241 25.8458 165.329 23.8023H165.345ZM160.848 401.871C162.424 399.838 161.688 396.985 160.496 394.957C157.79 390.618 154.933 386.237 150.861 383.043C150.223 382.508 149.469 382.127 148.659 381.93C147.849 381.733 147.005 381.726 146.191 381.908C145.025 382.863 144.121 384.1 143.565 385.502C143.039 387.314 143.302 389.226 143.307 391.086C143.47 395.288 143.144 399.491 143.36 403.725C143.371 404.536 143.689 405.313 144.251 405.898C144.813 406.483 145.576 406.833 146.386 406.877C148.986 406.987 151.471 406.068 153.961 405.438C156.43 404.686 159.167 403.982 160.832 401.871H160.848ZM146.139 11.867C146.438 10.5097 146.33 9.09429 145.828 7.79815C145.326 6.50201 144.453 5.38281 143.318 4.58084C139.236 1.4867 133.783 0.803779 128.84 1.59701C126.634 2.16436 123.261 2.72646 123.009 5.52642C122.783 10.1703 124.454 14.6302 124.974 19.1848C125.467 22.2842 125.462 25.6462 127.233 28.3621C128.856 30.9887 131.693 32.4701 134.293 33.9568C135.086 34.3455 136.042 35.1072 136.846 34.293C140.486 31.6191 142.735 27.4638 144.326 23.3243C145.803 19.6733 145.293 15.6546 146.118 11.867H146.139ZM135.475 410.129C136.694 409.326 137.671 408.206 138.303 406.891C138.935 405.575 139.198 404.112 139.063 402.659C138.427 396.087 134.477 390.109 129.134 386.374C128.299 385.848 127.238 385.087 126.234 385.664C125.071 386.463 124.212 387.631 123.797 388.979C122.394 392.767 123.371 396.975 121.911 400.752C120.824 403.583 119.185 406.614 120.03 409.724C121.38 411.521 123.834 411.941 125.94 412.104C129.202 412.272 132.764 412.188 135.475 410.129ZM122.552 15.5285C122.552 12.55 121.801 9.63968 121.47 6.69263C120.981 4.34444 119.726 1.26606 116.926 1.15049C113.961 1.13994 110.999 1.30307 108.053 1.63904C104.302 2.00676 100.641 3.82963 98.4292 6.93428C98.0667 7.59093 97.0528 8.30011 97.5992 9.11436C98.4187 10.9792 99.6164 12.7128 99.9789 14.7616C100.431 17.863 100.276 21.0228 99.5219 24.065C99.3327 21.4016 99.5901 18.7172 99.2434 16.0644C98.9387 13.2907 96.9793 11.1368 95.9864 8.61005C95.2457 6.45623 92.43 6.38269 90.5966 6.95529C86.0423 8.43393 81.8266 10.8016 78.1938 13.921C76.9383 15.124 75.3203 16.6317 75.7248 18.5596C76.6073 22.2369 80.8835 24.149 81.0988 28.0679C81.4666 29.3602 80.9097 31.4195 82.4647 32.0131C86.0841 33.6363 89.7561 35.7849 93.8694 35.517C95.0619 35.4119 96.6588 35.3804 97.2367 34.0986C98.6236 31.3354 98.9492 28.2045 99.8633 25.2837C102.217 27.3272 103.656 30.8469 107.05 31.3302C110.916 31.887 115.455 31.2882 118.134 28.1783C121.302 24.7532 122.331 20.0095 122.552 15.5285ZM114.315 409.356C115.549 407.991 116.705 406.231 116.369 404.303C115.891 401.361 114.656 398.608 113.931 395.724C113.065 392.709 112.907 389.42 111.373 386.657C110.244 384.63 107.916 383.873 105.968 382.896C104.25 383.815 102.49 384.855 101.476 386.573C98.9755 390.629 98.6078 395.603 96.1703 399.706C95.1827 401.456 93.675 402.9 92.9396 404.797C93.1339 406.583 94.6836 407.875 95.9339 409.036C99.7687 412.162 104.975 412.351 109.692 412.093C111.609 412.078 113.096 410.685 114.315 409.356ZM89.4567 402.427C92.9343 398.934 93.5805 393.67 93.2653 388.974C93.0551 386.085 92.6139 382.801 90.313 380.774C89.4509 380.808 88.6006 380.986 87.7967 381.299C86.1339 381.965 84.6198 382.954 83.342 384.209C80.6628 386.723 78.4627 389.703 76.849 393.003C75.667 395.462 74.5639 398.256 75.273 401.02C75.9034 403.194 78.1255 404.429 80.2321 404.791C83.4365 405.574 87.1663 404.928 89.4567 402.427ZM78.509 49.5378C81.5874 48.0827 83.7622 44.6733 83.3262 41.2167C82.8954 38.0648 82.0969 34.8761 80.4422 32.1182C79.8118 31.036 79.796 29.749 79.5912 28.5512C79.3443 26.182 77.8891 24.1858 76.4918 22.3472C75.9644 21.5997 75.2795 20.9771 74.4853 20.5233C73.6911 20.0694 72.8069 19.7954 71.8952 19.7206C69.6994 19.5157 67.6926 20.6346 65.7805 21.5067C63.4638 22.6414 60.9475 23.5029 58.9881 25.2365C57.3333 26.8124 56.4035 28.961 55.3476 30.9467C54.2917 32.9324 53.1097 35.0757 52.9942 37.4292C54.8958 38.0123 57.0812 37.8652 58.7307 39.1102C61.0316 40.807 62.6548 43.3495 65.2709 44.626C68.0446 46.0497 71.4172 47.1739 72.5939 50.4046C74.5849 50.4098 76.6861 50.4729 78.509 49.5378ZM45.8551 293.161C48.2243 290.25 47.2367 286.237 46.5327 282.901C45.5189 279.14 44.8202 274.759 41.4476 272.305C39.7561 270.898 37.4499 270.945 35.3907 271.255C30.3844 272.305 24.8843 271.365 20.2824 273.976C16.4423 275.893 14.1519 280.243 14.3463 284.482C14.2518 287.923 16.353 291.002 16.0799 294.463C16.0799 296.206 15.2814 300.279 16.8731 302.743C18.4491 304.539 21.1335 304.487 23.3083 304.156C25.4831 303.825 27.8628 303.488 30.0954 302.911C32.1967 301.86 33.7727 299.969 35.8424 298.881C39.0942 296.854 43.1864 296.081 45.8551 293.161ZM40.4915 267.241C42.3932 265.802 42.8082 263.212 42.1936 261.016C40.812 255.978 37.5445 251.755 34.6605 247.494C32.7378 244.39 28.7086 243.817 25.3833 244.343C21.6325 245.073 18.6539 247.642 15.5966 249.753C12.0927 252.201 9.08259 255.616 7.87435 259.787C6.66612 263.958 8.61506 268.618 12.1715 270.945C16.2217 272.206 20.6291 272.038 24.7161 270.997C30.0324 270.362 36.1524 271.039 40.4915 267.241ZM37.0087 163.38C38.6477 159.818 38.2274 155.747 37.4184 152.033C37.0875 150.825 36.746 149.359 35.543 148.734C33.3839 147.684 30.978 147.269 28.6876 146.575C25.3518 145.719 22.2261 144.274 19.09 142.898C17.1127 142.017 14.8811 141.892 12.8176 142.546C10.9167 143.112 9.18088 144.129 7.75843 145.511C6.33598 146.894 5.2691 148.6 4.64888 150.483C3.70856 153.551 5.73105 156.362 6.40346 159.246C7.4541 162.923 7.41732 167.22 10.212 170.151C13.2589 173.519 18.2074 173.829 22.452 173.829C28.3934 172.573 34.4346 169.143 37.0087 163.391V163.38Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M235.916 262.955C235.832 266.774 236.321 270.672 235.391 274.428C235.055 275.736 234.157 277.28 232.602 277.186C231.628 277.178 230.661 277.024 229.733 276.729C227.417 276.019 225.263 274.701 222.867 274.244C220.824 273.876 218.78 273.524 216.753 273.078C214.215 272.552 211.457 273.219 208.962 272.552C208.389 272.409 207.839 272.184 207.328 271.885C205.043 270.708 203.94 268.013 204.308 265.529C204.754 261.326 203.74 256.598 206.309 252.947C209.288 249.58 213.837 248.183 218.113 247.358C221.045 246.974 223.813 248.303 226.56 249.112C229.287 250.121 232.402 250.956 234.22 253.41C236.021 256.252 235.822 259.745 235.916 262.955ZM229.192 259.115C228.478 258.479 227.858 257.497 226.802 257.476C225.547 257.488 224.298 257.642 223.078 257.933C222.088 256.656 220.859 255.585 219.458 254.781C220.184 255.897 220.845 257.055 221.439 258.248C221.649 259.551 221.087 260.843 220.808 262.109C217.591 261.97 214.406 261.415 211.331 260.459C213.296 263.307 217.141 263.296 220.262 263.149C219.487 265.514 219.676 268.088 220.787 270.314C220.461 267.929 220.477 265.481 221.418 263.228C224.071 263.355 226.691 263.874 229.192 264.767C227.128 262.991 224.417 262.44 221.764 262.303C222.306 261.039 222.947 259.82 223.682 258.657C225.515 258.573 227.364 258.946 229.192 259.115ZM210.433 262.198C210.585 260.622 211.121 258.027 208.784 257.854C209.07 259.391 209.634 260.863 210.449 262.198H210.433Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M233.615 287.44L234.503 287.54C234.47 288.419 234.327 289.291 234.078 290.135C232.734 294.615 231.681 299.177 230.926 303.793C230.637 305.338 230.479 306.945 229.77 308.374C229.061 309.803 227.375 310.475 226.009 311.184C226.009 312.578 225.882 313.969 225.63 315.34C225.184 316.359 224.427 317.199 223.939 318.192C223.835 319.189 223.822 320.193 223.902 321.192L222.668 321.249C222.668 321.071 222.657 320.896 222.636 320.724C222.337 316.369 220.992 311.442 217.083 308.967L218.402 308.489C220.239 309.774 222.474 310.365 224.706 310.155C226.765 309.971 228.861 308.621 229.287 306.477C230.274 301.865 230.863 296.148 232.296 292.646C232.764 290.949 233.447 289.2 233.615 287.44Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M233.395 284.734C233.659 285.61 233.743 286.531 233.642 287.44C233.473 289.2 232.791 290.949 232.323 292.625C230.863 296.127 230.3 301.844 229.313 306.456C228.887 308.589 226.791 309.939 224.732 310.134C222.5 310.344 220.266 309.753 218.428 308.468C218.066 308.202 217.728 307.903 217.42 307.575C214.861 304.949 212.45 302.049 209.114 300.405C206.887 299.26 204.296 299.449 201.944 298.755C199.685 296.705 198.435 295.209 198.146 292.814C197.447 287.603 199.254 282.512 201.298 277.8C202.101 275.988 202.679 273.687 204.738 272.899C206.088 272.258 207.486 273.041 208.789 273.472L208.978 273.535C211.263 274.428 213.769 273.902 216.148 274.307C219.227 274.807 222.229 275.702 225.079 276.97C226.534 277.721 228.183 277.658 229.775 277.716H229.975C230.316 278.483 230.684 279.25 231.062 280.012C230.012 279.313 228.961 277.737 227.543 278.494C229.576 280.406 232.05 282.139 233.395 284.734ZM228.625 291.595C230.201 289.462 229.045 286.867 228.099 284.766C227.823 287.053 227.992 289.372 228.598 291.595H228.625ZM225.305 293.302C222.974 291.661 220.346 290.491 217.567 289.856C217.882 287.96 218.213 286.069 218.591 284.188C220.088 284.067 221.585 283.91 223.072 283.663C221.378 283.089 219.607 282.776 217.819 282.733C216.968 284.821 216.577 287.068 216.674 289.321C212.676 288.023 208.972 285.407 204.591 285.643C208.444 287.464 212.389 289.081 216.411 290.487C214.983 292.218 213.446 293.857 211.809 295.393L213.574 296.568C213.322 296.875 213.049 296.181 212.828 295.493C214.531 294.171 216.057 292.635 217.367 290.923C220.046 291.57 222.687 292.364 225.278 293.302H225.305ZM219.857 303.546C221.24 303.778 222.66 303.523 223.875 302.823C225.09 302.124 226.025 301.024 226.518 299.711C224.354 301.14 221.995 302.175 219.831 303.546H219.857Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M230.243 147.626C232.245 150.221 232.108 153.714 232.029 156.819C231.724 160.859 231.246 165.066 229.192 168.644C227.989 170.745 226.009 172.494 223.571 172.888C220.903 173.414 218.423 171.932 215.797 171.838C213.002 171.591 210.134 172.137 207.392 171.46C205.732 170.761 205.999 168.738 205.816 167.283C205.816 165.182 204.103 163.748 203.163 162.03C201.587 159.403 199.701 156.777 199.281 153.672C198.908 151.613 200.468 149.995 201.86 148.734C204.161 146.712 206.682 144.684 209.74 144.006C213.128 143.512 216.569 143.696 220.005 143.754C223.682 143.969 227.837 144.589 230.243 147.626ZM226.403 167.987C228.578 166.411 229.166 163.548 228.961 161.006C227.716 163.107 227.096 165.639 225.284 167.351C223.183 168.623 220.603 168.439 218.292 169.038C221.024 169.532 224.102 169.763 226.419 167.987H226.403ZM224.302 155.274C223.393 154.014 222.2 152.895 221.707 151.387C221.512 150.068 221.785 148.76 221.864 147.421C221.076 148.303 219.889 149.186 220.104 150.536C220.298 151.638 220.793 152.665 221.536 153.502C222.279 154.339 223.241 154.952 224.312 155.274H224.302ZM219.889 156.745C220.677 155.868 220.861 154.644 221.25 153.593C220.026 155.127 218.591 157.06 216.333 156.593C213.107 155.7 210.654 153 209.398 149.958C209.467 151.098 209.351 152.291 209.687 153.404C210.386 155.012 212.088 155.742 213.533 156.53C212.482 157.423 211.552 158.411 210.47 159.235C208.085 158.09 206.551 155.852 205.007 153.809C204.933 155.461 205.202 157.111 205.797 158.654C206.391 160.197 207.299 161.601 208.463 162.776C207.707 160.964 206.914 159.167 206.215 157.334C207.607 158.474 208.841 159.897 210.522 160.612C212.225 159.934 213.28 157.985 215.303 157.985C215.652 159.975 216.115 161.943 216.69 163.879C216.794 161.958 216.696 160.032 216.396 158.132C217.583 157.728 218.922 157.581 219.899 156.745H219.889Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M229.744 276.729L229.712 277.706C228.136 277.648 226.471 277.706 225.016 276.96C222.166 275.692 219.164 274.797 216.085 274.296C213.706 273.892 211.2 274.417 208.915 273.524L208.726 273.461L208.972 272.568C211.468 273.219 214.226 272.531 216.763 273.093C218.791 273.54 220.834 273.892 222.878 274.26C225.273 274.701 227.427 276.019 229.744 276.729Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M228.977 161.006C229.182 163.548 228.594 166.395 226.419 167.987C224.102 169.763 221.024 169.505 218.318 169.038C220.63 168.439 223.225 168.623 225.31 167.352C227.091 165.639 227.732 163.096 228.977 161.006Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M228.094 284.745C229.019 286.883 230.159 289.473 228.62 291.574C228.004 289.353 227.826 287.034 228.094 284.745Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M226.818 257.476C227.868 257.476 228.494 258.479 229.208 259.115C227.364 258.946 225.531 258.589 223.666 258.658C222.931 259.82 222.29 261.039 221.748 262.303C224.375 262.44 227.112 262.991 229.176 264.767C226.682 263.876 224.069 263.357 221.423 263.228C220.482 265.481 220.467 267.929 220.792 270.314C219.669 268.093 219.467 265.518 220.23 263.149C217.131 263.296 213.286 263.307 211.3 260.459C214.383 261.419 217.577 261.975 220.803 262.114C221.081 260.848 221.643 259.556 221.433 258.253C220.84 257.06 220.179 255.903 219.453 254.786C220.853 255.59 222.083 256.661 223.072 257.938C224.299 257.644 225.556 257.489 226.818 257.476Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M225.819 117.908C227.139 122.893 227.768 128.034 227.69 133.19C227.558 136.095 227.164 139.247 225.263 141.595C224.823 142.13 224.256 142.547 223.613 142.807C222.971 143.066 222.274 143.161 221.585 143.082C217.745 142.887 213.889 142.194 210.055 142.793C207.034 143.318 204.623 145.566 201.565 145.945C199.679 146.197 198.125 144.778 197.189 143.318C193.644 137.839 192.708 131.162 192.656 124.764C192.546 123.156 194.101 122.332 195.246 121.575C197.4 120.251 199.627 118.98 202.075 118.36C206.976 116.905 210.438 112.492 215.528 111.531C217.404 111.147 219.426 110.859 221.307 111.489C223.734 112.734 225.142 115.334 225.819 117.908ZM222.021 135.092C223.072 133.048 224.091 130.81 223.813 128.446C223.639 126.103 221.128 124.9 220.582 122.71C220.125 119.852 222.158 117.267 221.848 114.436C221.223 113.548 219.983 113.469 219.064 113.039C219.783 113.616 220.713 114.005 221.212 114.814C220.986 117.509 219.111 119.884 219.395 122.652C219.663 124.228 220.75 125.536 221.564 126.891L221.254 126.944C218.024 127.469 214.772 127.08 211.536 126.944C210.223 126.891 210.023 128.52 209.477 129.355C209.151 128.037 208.542 126.728 208.699 125.336C209.151 123.86 210.16 122.657 210.974 121.37C209.697 122.211 208.279 123.077 207.712 124.58C206.84 126.56 207.917 128.641 208.421 130.569C205.957 130.569 203.346 130.017 200.988 130.91C198.561 132.16 198.361 135.113 198.571 137.513C199.096 135.512 199.175 132.89 201.261 131.819C204.013 131.073 206.903 131.687 209.708 131.819C208.62 133.978 206.43 135.88 206.829 138.511C206.771 139.562 207.733 140.187 208.657 140.287C211.242 140.66 213.847 140.129 216.395 139.762C214.252 139.625 212.098 139.651 209.955 139.483C209.204 139.368 208.1 139.457 207.964 138.464C207.438 136.274 209.54 134.839 210.301 133.022C210.69 131.561 210.669 130.022 211.095 128.578C214.525 128.425 218.087 128.756 221.328 127.422C221.543 127.333 221.759 127.238 221.974 127.133C222.967 129.676 222.105 132.428 222.021 135.092ZM213.853 117.872C211.344 119.543 208.474 120.595 205.479 120.939C208.442 122.878 212.492 120.871 213.853 117.872Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M223.887 321.171C223.952 322.031 223.952 322.895 223.887 323.755C223.481 327.464 221.842 330.928 219.232 333.595C217.551 335.559 215.25 337.051 214.158 339.468C212.471 343.087 212.456 347.221 210.764 350.846C209.356 353.914 208.332 357.229 206.231 359.924C204.623 362.025 202.28 363.286 199.963 364.405C199.564 368.681 197.211 372.437 194.547 375.673C192.026 377.895 188.417 378.031 185.239 378.425L185.176 378.105C188.853 377.385 192.966 376.949 194.905 373.44C196.428 370.624 198.724 367.761 198.388 364.384C196.029 362.529 192.83 362.093 190.613 360.008C188.207 358.017 186.121 355.001 182.733 354.796C182.16 354.76 181.567 354.723 180.973 354.702V354.408C182.675 354.502 184.398 354.481 185.979 355.201C189.688 356.714 191.606 360.922 195.609 361.909C199.391 362.907 203.031 360.086 204.46 356.73C205.889 353.373 207.554 349.517 206.42 345.813C204.649 341.543 199.927 339.998 196.328 337.66L196.733 337.02C197.219 337.29 197.729 337.515 198.256 337.692C201.66 338.9 205.327 339.73 208.952 339.342C212.808 338.748 215.45 335.57 217.956 332.88C220.908 329.728 222.799 325.562 222.631 321.228L223.887 321.171Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M223.813 128.446C224.091 130.81 223.083 133.048 222.022 135.092C222.106 132.428 222.967 129.675 221.974 127.08C221.759 127.185 221.544 127.28 221.328 127.369L221.255 126.944L221.564 126.891C220.75 125.536 219.663 124.265 219.395 122.652C219.106 119.884 220.971 117.509 221.213 114.814C220.713 114.005 219.784 113.616 219.064 113.039C219.983 113.469 221.223 113.564 221.848 114.436C222.158 117.267 220.125 119.852 220.582 122.71C221.128 124.879 223.64 126.103 223.813 128.446Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M223.277 96.9112C221.276 93.2235 219.76 89.2932 218.765 85.2175C219.922 89.2405 221.432 93.1536 223.277 96.9112Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M221.717 151.387C222.211 152.895 223.403 154.014 224.312 155.274C223.243 154.952 222.284 154.34 221.542 153.505C220.8 152.67 220.304 151.646 220.11 150.546C219.894 149.196 221.082 148.314 221.869 147.431C221.796 148.734 221.523 150.095 221.717 151.387Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M222.652 321.228C222.82 325.562 220.929 329.749 217.977 332.88C215.471 335.57 212.828 338.748 208.973 339.342C205.348 339.73 201.681 338.9 198.277 337.692C197.75 337.515 197.24 337.29 196.754 337.02C194.652 335.885 192.892 334.13 190.623 333.29C189.473 332.764 188.128 332.392 187.445 331.246C185.696 328.62 185.99 325.315 185.948 322.316C186.032 317.126 185.785 311.647 188.259 306.898C188.865 305.476 189.781 304.208 190.941 303.187C192.101 302.166 193.475 301.418 194.962 300.998C200.336 299.711 205.81 301.655 210.664 303.867C213.233 304.954 214.945 307.229 217.068 308.936C220.976 311.41 222.321 316.338 222.62 320.693C222.638 320.871 222.648 321.05 222.652 321.228ZM217.924 324.333C219.442 321.932 220.551 319.111 219.973 316.233C218.595 318.708 217.89 321.501 217.929 324.333H217.924ZM209.876 337.603C211.977 336.389 213.932 334.503 213.753 331.861C211.983 333.432 210.879 335.533 209.881 337.603H209.876ZM214.415 326.602C211.946 325.725 209.435 324.953 207.06 323.85C207.47 322.845 207.89 321.848 208.321 320.861C207.303 317.847 205.946 314.959 204.276 312.251C204.891 314.951 206.02 317.504 206.987 320.067C204.203 319.427 201.334 318.98 198.713 317.803C196.869 317.031 195.782 315.266 194.61 313.753C194.059 315.634 193.56 317.53 193.16 319.453C193.796 318.544 194.411 317.625 195.015 316.7C197.815 320.236 202.653 319.92 206.572 321.16C206.125 321.749 205.684 322.342 205.243 322.941L205.616 324.307C203.919 325.468 201.975 326.166 200.173 327.133C198.534 328.278 197.836 330.285 196.964 331.987C198.802 330.411 200.236 328.241 202.642 327.48C204.225 326.899 205.621 325.901 206.682 324.59C209.148 325.634 211.753 326.311 214.415 326.602ZM195.819 308.074C197.337 306.609 199.359 306.498 201.345 306.724C200.468 305.868 199.37 304.781 198.046 305.464C196.717 305.716 196.039 306.85 195.819 308.085V308.074ZM190.912 327.706C190.882 325.745 190.706 323.789 190.387 321.854C188.711 323.608 189.725 326.025 190.912 327.716V327.706Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M217.541 289.856C220.32 290.49 222.948 291.661 225.279 293.302C222.681 292.374 220.035 291.59 217.351 290.954C216.041 292.666 214.516 294.202 212.813 295.524C213.054 296.213 213.307 296.906 213.559 296.599L211.794 295.425C213.43 293.889 214.967 292.25 216.395 290.518C212.373 289.112 208.428 287.495 204.576 285.675C208.941 285.423 212.645 288.039 216.658 289.352C216.561 287.099 216.952 284.852 217.803 282.764C219.591 282.807 221.362 283.121 223.056 283.694C221.57 283.925 220.073 284.083 218.575 284.22C218.187 286.069 217.856 287.96 217.541 289.856Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M223.277 96.9217C222.195 99.8845 220.95 102.879 218.759 105.211C217.441 106.714 215.665 107.68 214.031 108.778C211.741 110.291 210.055 112.56 207.67 113.942C205.831 114.993 204.071 116.269 202.059 116.989C199.672 117.326 197.238 117.012 195.015 116.08C191.9 114.814 189.993 111.878 188.438 109.036C186 104.686 184.697 99.5798 185.286 94.6103C185.864 91.3323 188.879 89.273 191.784 88.1593C195.262 86.6464 198.713 85.0494 202.054 83.2528C205.312 81.3694 208.038 78.6887 209.976 75.4623L209.64 74.3592C209.697 73.5291 209.766 72.7044 209.834 71.8796C210.112 72.405 210.396 72.8883 210.685 73.3978C210.438 73.9231 210.196 74.4485 209.965 74.9738C212.545 75.0683 215.219 75.9299 217.068 77.7737C217.278 78.9872 217.525 80.227 217.819 81.4983C218.113 82.7695 218.434 84.0093 218.78 85.2123C219.769 89.2927 221.28 93.2283 223.277 96.9217ZM212.933 93.9168C214.551 95.2827 215.943 96.9585 217.924 97.841C216.948 96.4294 215.857 95.101 214.662 93.8696C213.144 92.2096 212.928 89.8614 212.25 87.8126C211.803 89.5531 211.773 91.3744 212.161 93.1289C210.359 93.276 208.337 93.1289 206.85 94.3319C205.185 95.6084 204.492 97.6676 203.698 99.5273C202.428 98.2808 201.003 97.2022 199.459 96.3176C200.152 94.6103 200.704 92.8137 201.776 91.2955C202.826 90.2028 204.47 89.8771 205.537 88.774C206.062 87.8862 205.81 86.762 205.957 85.7744C205.064 86.8881 204.381 88.2486 203.105 88.9998C201.392 89.6828 199.532 89.8614 197.762 90.3237C198.918 90.4707 200.074 90.6021 201.235 90.7334C199.995 92.6929 197.878 94.7311 198.519 97.2579C199.8 98.5659 202.296 98.9914 202.663 100.982C199.874 101.881 196.885 101.896 194.106 102.916C197.053 102.863 200.053 102.916 202.9 102.033C203.036 103.908 202.832 106.362 204.707 107.475C206.808 108.705 209.214 107.397 211.195 106.53C209.062 106.53 206.204 108.037 204.665 105.952C202.879 102.937 204.633 99.5483 206.419 97.0215C207.727 94.7994 210.48 93.7908 212.933 93.9168ZM203.577 113.485C202.088 113.122 200.541 113.061 199.028 113.306C197.042 113.664 195.051 113.249 193.092 112.928C196.065 115.423 200.226 114.767 203.577 113.485Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M221.255 126.944L221.328 127.369C218.087 128.704 214.525 128.373 211.095 128.525C210.67 129.97 210.691 131.509 210.302 132.969C209.551 134.787 207.418 136.221 207.964 138.412C208.101 139.404 209.204 139.315 209.955 139.431C212.099 139.599 214.252 139.573 216.396 139.709C213.848 140.103 211.242 140.634 208.658 140.234C207.733 140.135 206.772 139.483 206.83 138.459C206.43 135.832 208.621 133.925 209.708 131.766C206.903 131.645 204.014 131.031 201.261 131.766C199.16 132.817 199.071 135.444 198.571 137.461C198.361 135.06 198.571 132.108 200.988 130.857C203.347 129.964 205.957 130.532 208.421 130.516C207.896 128.588 206.845 126.508 207.712 124.527C208.279 123.025 209.698 122.158 210.974 121.318C210.16 122.605 209.151 123.808 208.7 125.284C208.542 126.66 209.151 127.984 209.477 129.303C210.002 128.441 210.223 126.839 211.536 126.891C214.772 127.08 218.024 127.506 221.255 126.944Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M226.492 299.711C225.999 301.024 225.064 302.124 223.849 302.823C222.634 303.523 221.214 303.778 219.831 303.546C221.995 302.175 224.354 301.14 226.492 299.711Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M221.26 153.572C220.871 154.623 220.687 155.868 219.899 156.724C218.922 157.56 217.582 157.707 216.406 158.08C216.706 159.98 216.804 161.906 216.7 163.827C216.127 161.904 215.664 159.95 215.313 157.975C213.291 158.001 212.235 159.934 210.533 160.601C208.846 159.887 207.617 158.463 206.225 157.323C206.924 159.157 207.717 160.953 208.473 162.765C207.308 161.586 206.4 160.178 205.807 158.63C205.214 157.082 204.948 155.428 205.027 153.772C206.572 155.815 208.106 158.053 210.491 159.199C211.573 158.374 212.524 157.386 213.553 156.493C212.109 155.705 210.401 154.975 209.708 153.367C209.372 152.254 209.487 151.061 209.419 149.921C210.674 152.963 213.128 155.663 216.353 156.556C218.602 157.039 220.036 155.106 221.26 153.572Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M219.978 316.233C220.503 319.111 219.453 321.932 217.929 324.333C217.892 321.5 218.598 318.707 219.978 316.233Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M217.924 97.841C215.944 96.9585 214.552 95.2827 212.934 93.9169C210.481 93.7908 207.728 94.7994 206.436 97.0058C204.65 99.5483 202.895 102.937 204.681 105.936C206.22 108.038 209.078 106.53 211.211 106.514C209.23 107.381 206.84 108.689 204.723 107.46C202.848 106.346 203.053 103.893 202.916 102.017C200.069 102.9 197.069 102.847 194.122 102.9C196.891 101.881 199.901 101.849 202.68 100.967C202.312 98.9757 199.817 98.5502 198.535 97.2422C197.894 94.7154 200.011 92.6771 201.251 90.7177C200.09 90.5864 198.934 90.455 197.778 90.3079C199.549 89.8457 201.408 89.6671 203.121 88.9841C204.382 88.2329 205.08 86.8829 205.973 85.7587C205.826 86.7463 206.073 87.86 205.553 88.7583C204.502 89.8614 202.858 90.1871 201.792 91.2798C200.741 92.798 200.169 94.5946 199.475 96.3019C201.019 97.1864 202.444 98.2651 203.714 99.5116C204.492 97.6519 205.185 95.5927 206.866 94.3161C208.353 93.1027 210.375 93.2655 212.177 93.1132C211.789 91.3587 211.82 89.5374 212.267 87.7969C212.944 89.8457 213.16 92.1938 214.678 93.8539C215.868 95.091 216.954 96.4246 217.924 97.841Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M213.758 331.856C213.937 334.482 211.977 336.384 209.881 337.597C210.879 335.533 211.983 333.432 213.758 331.856Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M208.799 257.854C211.137 258.027 210.601 260.596 210.449 262.198C209.639 260.862 209.08 259.39 208.799 257.854Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M205.479 120.939C208.474 120.594 211.344 119.543 213.853 117.871C212.493 120.871 208.442 122.878 205.479 120.939Z"
                            fill="#F9C1C4"/>
                        {imUL5 ? '' : <path onClick={handleAdd} id="UL5"
                                            d="M208.663 70.0831C208.76 71.7819 208.485 73.4815 207.857 75.063C207.229 76.6445 206.263 78.0698 205.027 79.2395C202.185 81.9186 198.629 83.7152 194.994 85.0705C191.795 86.2525 188.081 86.8146 184.908 85.2176C182.598 84.0915 180.669 82.3125 179.36 80.101C178.472 73.4977 183.563 67.9451 188.816 64.7616C192.546 62.6288 195.84 59.3981 200.284 58.8412C201.676 58.6574 203.383 58.2476 204.486 59.4033C207.228 62.2138 208.484 66.222 208.663 70.0831ZM205.306 66.9995C204.912 64.8982 204.365 62.4607 202.201 61.5361C199.737 60.3174 197.342 62.3714 195.629 63.9526C197.083 63.6385 198.517 63.235 199.921 62.7444C200.625 62.529 201.45 62.2191 202.112 62.7444C203.598 63.774 204.329 65.5181 205.306 66.9995ZM201.986 77.3273C202.545 76.799 203.05 76.2165 203.493 75.5885C201.812 76.1138 200.137 76.7179 198.445 77.238C197.557 74.4065 194.006 73.5292 193.386 70.5664C193.57 69.4843 194.463 68.6647 194.962 67.6929C193.029 67.6929 191.637 69.1008 190.345 70.3195L191.779 70.2092C192.698 73.0774 195.115 74.853 197.326 76.6811C197.205 78.5723 195.388 79.8068 194.369 81.283C195.262 80.5738 196.128 79.8383 197.037 79.1502C198.398 77.9472 200.389 78.1258 201.986 77.3273ZM183.841 76.907C184.671 78.6239 185.904 80.1145 187.434 81.2514C186.231 79.2184 185.401 76.9806 185.517 74.5851C184.96 75.3626 184.398 76.1348 183.841 76.907Z"
                                            fill={colorUL5}/>}
                        <path
                            d="M207.055 323.86C209.435 324.964 211.946 325.736 214.41 326.613C211.75 326.321 209.147 325.644 206.682 324.601C205.622 325.911 204.226 326.91 202.643 327.49C200.237 328.252 198.803 330.432 196.964 331.998C197.836 330.28 198.54 328.289 200.174 327.144C201.976 326.177 203.919 325.478 205.616 324.317L205.243 322.951C205.684 322.353 206.126 321.759 206.572 321.171C202.643 319.931 197.804 320.246 195.015 316.711C194.411 317.635 193.796 318.555 193.161 319.463C193.56 317.541 194.059 315.644 194.611 313.764C195.782 315.277 196.869 317.042 198.713 317.814C201.34 318.991 204.203 319.437 206.987 320.078C206.021 317.493 204.886 314.961 204.276 312.261C205.946 314.969 207.303 317.858 208.321 320.871C207.877 321.859 207.455 322.855 207.055 323.86Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M206.441 345.813C207.575 349.491 205.952 353.357 204.481 356.73C203.01 360.102 199.412 362.907 195.63 361.909C191.627 360.922 189.709 356.714 186.001 355.201C184.425 354.481 182.696 354.502 180.994 354.408C180.224 354.375 179.458 354.278 178.704 354.119C176.997 353.646 176.077 351.828 175.988 350.168C175.82 347.263 176.618 344.39 177.433 341.642C178.42 338.322 181.11 335.454 184.54 334.656C188.68 333.705 192.877 335.281 196.271 337.608L196.349 337.66C199.948 339.998 204.67 341.543 206.441 345.813ZM204.865 350.111C205.222 348.782 204.497 347.568 203.956 346.433C203.63 348.666 203.583 351.056 202.38 353.042C201.329 354.775 200.163 356.441 199.38 358.295C201.755 356.057 204.124 353.394 204.849 350.111H204.865ZM199.086 344.857C197.347 342.814 194.358 343.082 191.952 342.436C192.714 342.961 193.465 343.523 194.222 344.08C190.828 346.25 190.135 350.809 191.364 354.413C191.579 350.909 192.199 347.09 194.873 344.568C196.255 344.579 197.673 344.815 199.06 344.873L199.086 344.857Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M203.94 346.418C204.465 347.568 205.206 348.782 204.849 350.095C204.124 353.394 201.755 356.041 199.354 358.285C200.137 356.409 201.308 354.744 202.354 353.031C203.567 351.04 203.614 348.666 203.94 346.418Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M202.201 61.5361C204.365 62.4607 204.912 64.9192 205.306 66.9994C204.329 65.5233 203.599 63.774 202.112 62.7338C201.45 62.2085 200.625 62.5289 199.921 62.7338C198.517 63.2244 197.083 63.6279 195.629 63.9421C197.342 62.3661 199.737 60.3173 202.201 61.5361Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M203.493 75.5884C203.05 76.2165 202.545 76.7989 201.986 77.3272C200.41 78.1205 198.398 77.9471 197.011 79.1659C196.102 79.854 195.235 80.5895 194.342 81.2987C195.361 79.8225 197.179 78.588 197.3 76.6969C195.088 74.8687 192.672 73.0932 191.752 70.2249L190.318 70.3352C191.611 69.1007 193.003 67.7086 194.936 67.7086C194.463 68.6805 193.57 69.5 193.36 70.5821C193.98 73.5449 197.531 74.4222 198.419 77.2537C200.137 76.7179 201.812 76.1348 203.493 75.5884Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M199.028 113.322C200.542 113.077 202.089 113.137 203.578 113.501C200.226 114.783 196.066 115.46 193.071 112.944C195.046 113.249 197.043 113.664 199.028 113.322Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M201.35 306.735C199.364 306.509 197.342 306.619 195.824 308.085C196.044 306.85 196.722 305.716 198.051 305.458C199.37 304.791 200.468 305.879 201.35 306.735Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M198.393 364.384C198.729 367.761 196.433 370.624 194.91 373.44C192.972 376.949 188.837 377.385 185.181 378.105C184.577 378.226 183.983 378.352 183.416 378.499C184.566 379.723 186.232 380.837 186.363 382.67C186.683 385.491 185.102 388.076 183.258 390.061C181.414 392.047 179.471 394.064 177.07 395.409C175.236 396.353 173.183 396.789 171.124 396.671C169.065 396.554 167.075 395.888 165.361 394.742C163.186 393.229 162.235 390.634 161.363 388.254C159.094 382.019 158.868 374.916 161.463 368.749C162.356 366.585 165.261 366.348 167.147 367.236C168.339 367.993 169.075 369.259 170.004 370.288C171.58 372.237 173.713 373.64 175.872 374.885C173.335 372.563 170.094 370.682 168.77 367.325C168.171 363.832 168.245 359.477 171.334 357.097C173.96 354.77 177.585 354.56 180.984 354.702C181.577 354.702 182.171 354.76 182.744 354.797C186.127 355.001 188.212 358.017 190.623 360.008C192.835 362.093 196.034 362.529 198.393 364.384ZM191.306 373.939C192.326 372.99 193.082 371.793 193.501 370.464C193.92 369.136 193.987 367.721 193.696 366.359C192.672 368.287 192.262 370.472 191.227 372.39C190.208 373.724 188.669 374.491 187.356 375.541C188.743 375.163 190.235 374.932 191.306 373.939ZM187.167 364.426C186.738 363.052 186.237 361.701 185.664 360.381C185.507 361.153 184.65 362.014 185.181 362.823C185.782 363.429 186.448 363.967 187.167 364.426ZM182.092 370.01C183.838 368.273 185.173 366.167 186.001 363.848C183.421 364.804 182.712 367.604 182.092 369.994V370.01ZM182.307 372.636C181.931 371.937 181.487 371.275 180.984 370.661C180.075 370.015 178.882 370.047 177.832 369.81C178.851 371.344 180.7 371.901 182.307 372.615V372.636ZM175.904 389.063C178.882 387.529 181.105 384.96 183.348 382.544C179.67 383.5 177.695 386.951 174.501 388.68C172.663 389.662 171.407 391.364 170.519 393.208C172.221 391.69 173.876 390.098 175.904 389.042V389.063ZM180.143 360.018C179.213 360.454 177.905 360.649 177.58 361.799C177.296 362.813 177.58 363.9 177.664 364.951C178.488 363.27 179.339 361.641 180.143 359.997V360.018ZM163.165 386.951C162.855 384.85 162.33 382.749 162.188 380.6C161.946 377.58 162.414 374.57 162.54 371.56C159.514 376.182 160.769 382.287 163.165 386.93V386.951Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M197.741 44.4684C199.212 49.1543 198.603 54.7594 195.031 58.3684C191.826 61.6622 187.676 63.921 183.789 66.2482C180.295 66.3428 176.324 64.5724 174.858 61.1999C173.319 58.1688 171.607 54.7332 172.857 51.2818C173.792 47.5678 177.905 46.4751 180.7 44.5104C182.533 43.5123 183.295 41.4951 184.524 39.9349C187.776 39.2415 191.191 39.8403 194.385 40.6178C196.239 40.9908 197.242 42.7874 197.741 44.4684ZM191.506 56.2146C190.192 56.6033 188.732 56.8187 187.645 57.717C186.83 58.3842 186.799 59.5451 186.436 60.4592C188.243 59.1897 189.939 57.7698 191.506 56.2146ZM189.961 49.501C188.953 50.0631 187.965 50.6514 186.988 51.2608C186.109 50.5604 185.233 49.86 184.361 49.1595C185.262 48.1149 186.1 47.0186 186.872 45.8763C184.361 47.6624 181.619 49.0282 179.019 50.6882C180.517 50.6661 182.006 50.447 183.447 50.0368C185.953 51.5392 186.909 54.3392 188.275 56.7504C188.102 55.4791 187.881 54.2131 187.65 52.9576C188.481 51.8472 189.253 50.6933 189.961 49.501ZM181.709 61.058C180.411 58.9568 179.134 56.5981 176.692 55.6945C177.652 58.0315 179.438 59.9345 181.709 61.0423V61.058Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M191.926 342.451C194.321 343.098 197.321 342.83 199.06 344.873C197.647 344.815 196.254 344.579 194.857 344.584C192.183 347.106 191.563 350.925 191.348 354.429C190.119 350.825 190.823 346.265 194.206 344.096C193.439 343.539 192.687 342.992 191.926 342.451Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M193.696 366.359C193.987 367.721 193.92 369.136 193.501 370.464C193.082 371.793 192.326 372.99 191.306 373.939C190.255 374.953 188.721 375.163 187.355 375.515C188.669 374.506 190.208 373.719 191.227 372.363C192.262 370.472 192.672 368.287 193.696 366.359Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M190.371 321.875C190.69 323.81 190.866 325.766 190.897 327.727C189.725 326.025 188.711 323.608 190.371 321.875Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M187.645 57.717C188.732 56.8187 190.193 56.6033 191.506 56.2146C189.939 57.7698 188.243 59.1897 186.437 60.4592C186.799 59.5451 186.831 58.3842 187.645 57.717Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M186.988 51.2608C187.965 50.6514 188.953 50.063 189.961 49.5009C189.249 50.69 188.474 51.8403 187.639 52.9471C187.87 54.2026 188.091 55.4686 188.264 56.7399C186.899 54.3286 185.943 51.5287 183.437 50.0263C181.996 50.4365 180.507 50.6555 179.008 50.6777C181.593 49.0282 184.351 47.6518 186.862 45.8657C186.089 47.0081 185.251 48.1043 184.351 49.149C185.233 49.8459 186.112 50.5498 186.988 51.2608Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M185.664 360.365C186.237 361.691 186.738 363.046 187.166 364.426C186.447 363.966 185.781 363.429 185.181 362.823C184.65 361.999 185.506 361.137 185.664 360.365Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M187.435 81.2777C185.904 80.1407 184.671 78.6501 183.841 76.9332C184.398 76.161 184.96 75.3888 185.517 74.6113C185.401 76.9805 186.232 79.2184 187.435 81.2777Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M186 363.832C185.173 366.152 183.837 368.257 182.092 369.994C182.712 367.604 183.421 364.804 186 363.832Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M183.363 29.5808C183.784 31.0465 184.745 32.3125 185.06 33.7834C183.29 38.4535 181.078 43.4703 176.503 46.0234C173.592 48.0616 169.973 46.6327 166.91 45.766C164.967 45.1723 162.35 44.2215 162.282 41.7998C162.014 37.8126 162.083 33.6626 163.58 29.896C164.63 27.2694 165.597 24.6428 166.732 22.1055C167.005 21.3543 167.441 20.5978 167.341 19.7731C167.2 18.8759 166.979 17.9933 166.679 17.136C175.273 15.996 182.171 19.1585 183.726 23.8653C184.015 24.8057 184.43 26.7336 183.363 29.5808ZM179.019 41.5634C176.96 42.4669 174.853 43.4073 173.24 45.0042C174.431 45.0385 175.606 44.7331 176.63 44.1238C177.653 43.5144 178.482 42.6264 179.019 41.5634ZM175.61 28.9925C176.844 29.2499 177.958 29.896 179.124 30.3636C177.637 28.7876 176.324 27.033 174.753 25.5306C174.228 24.9317 173.356 24.9265 172.626 24.7741C173.24 25.746 173.965 26.6443 174.675 27.5531C173.686 28.6476 173.094 30.0426 172.993 31.514C171.717 31.2671 170.367 31.1148 169.211 31.7872C171.981 32.5128 174.566 33.8161 176.797 35.6115C176.02 34.0259 174.888 32.6415 173.487 31.5665C174.06 30.6577 174.312 29.1448 175.61 28.9925ZM165.902 31.4194C165.098 32.1129 164.1 32.6907 163.611 33.6731C162.897 35.5012 163.228 37.5027 163.501 39.3886C164.134 36.6858 164.932 34.0244 165.891 31.4194H165.902Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M180.984 370.64C181.487 371.254 181.931 371.916 182.307 372.615C180.7 371.901 178.851 371.344 177.837 369.789C178.872 370.026 180.075 369.994 180.984 370.64Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M183.347 382.523C181.104 384.939 178.882 387.508 175.904 389.042C173.876 390.093 172.226 391.669 170.519 393.187C171.407 391.343 172.662 389.641 174.501 388.659C177.711 386.93 179.696 383.479 183.347 382.523Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M176.692 55.6787C179.135 56.5823 180.411 58.962 181.709 61.0422C179.435 59.9306 177.649 58.0216 176.692 55.6787Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M177.579 361.799C177.905 360.649 179.213 360.454 180.143 360.018C179.339 361.662 178.488 363.291 177.663 364.93C177.6 363.869 177.296 362.792 177.579 361.799Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M173.219 45.0305C174.853 43.4545 176.96 42.4932 178.998 41.5896C178.461 42.6526 177.632 43.5406 176.609 44.15C175.585 44.7593 174.41 45.0647 173.219 45.0305Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M179.113 30.3636C177.947 29.896 176.834 29.2499 175.599 28.9925C174.312 29.1448 174.06 30.6578 173.498 31.5666C174.898 32.6415 176.031 34.0259 176.807 35.6115C174.577 33.8161 171.992 32.5128 169.222 31.7872C170.393 31.1148 171.727 31.2619 173.004 31.514C173.104 30.0426 173.696 28.6476 174.685 27.5531C173.976 26.6443 173.251 25.746 172.636 24.7742C173.366 24.9265 174.212 24.9318 174.764 25.5306C176.314 27.033 177.627 28.7824 179.113 30.3636Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M166.453 19.1899C167.031 20.8342 165.954 22.3419 165.329 23.8023C164.242 25.8458 163.638 28.2412 161.925 29.8855C160.039 31.3669 157.87 32.449 155.973 33.9199C154.334 35.291 152.038 34.9706 150.079 34.7762C147.941 34.6029 147.143 32.2442 146.88 30.4423C146.097 24.3486 146.701 18.1813 147.431 12.1086C147.614 10.4585 147.475 8.78875 147.022 7.19161C148.149 7.03509 149.295 7.10654 150.394 7.40174C153.21 8.09516 156.257 8.04788 158.847 9.50302C160.702 10.5221 162.332 11.9055 163.639 13.5701C164.946 15.2347 165.903 17.1462 166.453 19.1899ZM156.383 12.3608C159.442 14.113 161.995 16.6266 163.795 19.6575C162.718 15.6283 159.44 12.4973 155.732 10.8058C153.825 10.0388 151.145 9.55555 149.627 11.2996C148.529 12.4658 148.981 14.1469 149.049 15.5705C149.748 14.2519 149.916 12.282 151.466 11.6253C153.14 11.3075 154.872 11.5629 156.383 12.3503V12.3608ZM155.159 32.323C157.633 31.4877 160.627 30.1954 160.885 27.1958C158.883 28.7823 156.819 30.3478 155.159 32.3125V32.323Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M163.601 33.6731C164.089 32.6907 165.088 32.0971 165.891 31.4194C164.929 34.0242 164.127 36.6856 163.491 39.3886C163.217 37.5026 162.886 35.5012 163.601 33.6731Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M162.187 380.579C162.329 382.723 162.855 384.782 163.165 386.93C160.769 382.296 159.514 376.182 162.539 371.538C162.413 374.549 161.951 377.559 162.187 380.579Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M160.481 394.957C161.673 396.985 162.387 399.838 160.832 401.871C159.167 403.972 156.43 404.686 153.972 405.411C151.482 406.042 148.997 406.987 146.397 406.851C145.587 406.807 144.824 406.457 144.262 405.872C143.7 405.286 143.382 404.51 143.371 403.699C143.155 399.496 143.481 395.294 143.318 391.059C143.318 389.2 143.061 387.288 143.576 385.475C144.132 384.074 145.036 382.837 146.202 381.882C147.016 381.699 147.86 381.707 148.67 381.904C149.48 382.1 150.234 382.481 150.872 383.017C154.917 386.237 157.775 390.618 160.481 394.957ZM160.89 399.512C161.027 398.304 159.945 397.547 159.314 396.67C159.409 398.587 159.587 400.505 159.84 402.412C160.234 401.477 160.832 400.557 160.901 399.512H160.89ZM146.06 400.857C146.323 398.23 147.573 395.02 145.635 392.788C145.283 395.467 145.052 398.283 146.06 400.857Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M163.795 19.647C161.995 16.6161 159.442 14.1025 156.383 12.3503C154.873 11.5593 153.141 11.3002 151.466 11.6148C149.89 12.2715 149.748 14.2414 149.05 15.56C148.981 14.1364 148.524 12.4553 149.627 11.2891C151.146 9.54506 153.83 10.0284 155.732 10.7953C159.44 12.4869 162.718 15.6125 163.795 19.647Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M159.325 396.67C159.955 397.547 161.037 398.304 160.901 399.512C160.843 400.562 160.244 401.476 159.85 402.412C159.587 400.505 159.409 398.571 159.325 396.67Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M160.901 27.1696C160.643 30.1691 157.649 31.4614 155.175 32.2967C156.819 30.3477 158.884 28.7823 160.901 27.1696Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M143.318 4.58085C144.453 5.38703 145.325 6.51088 145.823 7.81106C146.321 9.11124 146.424 10.5296 146.118 11.8881C145.293 15.6756 145.803 19.6943 144.327 23.3401C142.751 27.4848 140.487 31.6349 136.846 34.3088C136.042 35.123 135.086 34.3613 134.293 33.9726C131.667 32.4859 128.856 31.015 127.233 28.3779C125.462 25.662 125.468 22.2999 124.974 19.2005C124.449 14.6302 122.783 10.1703 123.009 5.54219C123.261 2.74223 126.634 2.18013 128.84 1.61279C133.784 0.78278 139.236 1.4657 143.318 4.58085ZM142.793 12.986C142.488 11.3627 142.42 9.49785 141.154 8.2581C138.574 5.63149 134.708 4.88554 131.173 4.63864C129.287 4.63864 126.97 4.68066 125.683 6.31441C124.822 7.6067 125.883 9.05658 126.345 10.2806C126.634 8.99355 125.893 6.72941 127.716 6.36694C131.819 5.62099 136.421 5.86789 139.914 8.38417C141.501 9.40855 141.989 11.326 142.803 12.9387L142.793 12.986Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M145.635 392.793C147.573 395.026 146.323 398.246 146.06 400.862C145.051 398.283 145.283 395.467 145.635 392.793Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M141.164 8.25799C142.43 9.47674 142.498 11.3416 142.803 12.9859C142.01 11.3731 141.5 9.45572 139.93 8.40508C136.436 5.8888 131.834 5.6419 127.732 6.38785C125.909 6.75032 126.649 9.01446 126.36 10.3015C125.898 9.07749 124.837 7.62761 125.699 6.33532C126.97 4.70157 129.302 4.68056 131.188 4.65955C134.718 4.85917 138.585 5.63139 141.164 8.25799Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M139.063 402.643C139.201 404.099 138.94 405.565 138.308 406.883C137.676 408.202 136.697 409.324 135.475 410.128C132.765 412.203 129.203 412.288 125.941 412.088C123.839 411.925 121.381 411.505 120.031 409.708C119.185 406.598 120.824 403.567 121.911 400.736C123.372 396.959 122.395 392.751 123.797 388.963C124.212 387.615 125.072 386.447 126.235 385.649C127.238 385.071 128.299 385.832 129.135 386.358C134.477 390.093 138.427 396.071 139.063 402.643ZM124.354 403.515C126.216 400.638 126.944 397.173 126.398 393.791C124.864 396.775 124.848 400.258 124.349 403.515H124.354Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M126.392 393.791C126.939 397.173 126.211 400.638 124.349 403.515C124.848 400.258 124.863 396.775 126.392 393.791Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M121.501 6.68205C121.832 9.62911 122.594 12.5394 122.583 15.518C122.347 19.9989 121.317 24.7426 118.186 28.1257C115.513 31.2776 110.969 31.8607 107.102 31.2776C103.709 30.7943 102.269 27.2746 99.9158 25.2311L99.5534 24.0124C100.308 20.9702 100.463 17.8104 100.01 14.709C99.6479 12.6602 98.4344 10.9266 97.6307 9.06176C97.1054 8.24751 98.0982 7.53833 98.4607 6.88168C100.672 3.77703 104.334 1.95417 108.085 1.58644C111.03 1.25047 113.993 1.08734 116.957 1.09789C119.741 1.266 120.976 4.34438 121.501 6.68205ZM116.406 26.5287C118.186 22.8514 120.818 18.9956 119.631 14.7405C118.686 17.2883 118.229 19.9937 117.236 22.51C116.733 23.7972 116.448 25.1587 116.39 26.5392L116.406 26.5287ZM113.401 5.46856C115.612 5.10084 117.603 6.11471 119.237 7.4963C117.756 4.00817 113.033 3.64045 110.039 5.27419C108.389 6.22503 106.519 6.55598 104.67 6.85016C103.288 6.96573 102.5 8.20023 101.628 9.10904C103.382 8.44875 105.222 8.05048 107.092 7.92707C109.419 7.78523 110.921 5.26369 113.385 5.47907L113.401 5.46856ZM104.675 27.2011C103.162 25.2101 102.821 22.7043 102.101 20.3719C100.814 22.8147 101.954 26.3658 104.659 27.2116L104.675 27.2011Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M119.616 14.751C120.803 19.0061 118.171 22.8882 116.39 26.5392C116.444 25.1631 116.724 23.8053 117.22 22.5205C118.213 19.9937 118.67 17.2988 119.616 14.751Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M116.369 404.303C116.705 406.231 115.55 407.98 114.315 409.356C113.081 410.733 111.61 412.077 109.692 412.109C104.965 412.366 99.7691 412.177 95.9343 409.052C94.684 407.891 93.1343 406.598 92.9399 404.812C93.6754 402.916 95.1831 401.471 96.1707 399.722C98.6082 395.624 98.9759 390.65 101.476 386.589C102.49 384.85 104.25 383.81 105.968 382.912C107.917 383.889 110.244 384.645 111.373 386.673C112.907 389.462 113.065 392.725 113.932 395.74C114.672 398.608 115.891 401.361 116.369 404.303ZM112.309 403.079C111.83 400.641 111.715 397.988 110.281 395.877C110.014 397.152 110.058 398.472 110.411 399.726C110.764 400.98 111.415 402.13 112.309 403.079ZM110.764 409.556C107.003 409.404 103.236 409.593 99.4959 409.109C102.895 410.869 107.318 411.662 110.764 409.556Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M119.222 7.5068C117.583 6.12521 115.597 5.11134 113.385 5.47906C110.922 5.26368 109.424 7.78522 107.081 7.94807C105.212 8.07149 103.371 8.46976 101.618 9.13004C102.49 8.22124 103.278 6.98673 104.66 6.87116C106.509 6.56648 108.379 6.23553 110.029 5.2952C113.018 3.65095 117.74 4.01867 119.222 7.5068Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M110.28 395.877C111.715 397.978 111.83 400.641 112.308 403.079C111.415 402.13 110.764 400.98 110.411 399.726C110.058 398.472 110.013 397.152 110.28 395.877Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M99.4956 409.109C103.236 409.593 107.002 409.404 110.764 409.556C107.318 411.662 102.894 410.869 99.4956 409.109Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M102.064 20.3929C102.784 22.7149 103.115 25.2206 104.638 27.2221C101.954 26.3658 100.814 22.8147 102.064 20.3929Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M99.5376 24.065L99.9 25.2837C98.965 28.2045 98.6393 31.3354 97.2734 34.0986C96.6956 35.3804 95.0986 35.4119 93.9061 35.517C89.7929 35.7849 86.1209 33.6363 82.5014 32.0131C80.9255 31.4195 81.5033 29.3865 81.1356 28.0679C80.9202 24.149 76.6441 22.2158 75.7615 18.5596C75.357 16.6317 76.975 15.124 78.2306 13.921C81.8571 10.8039 86.0655 8.43642 90.6124 6.95525C92.4457 6.38265 95.2615 6.42993 96.0022 8.61002C96.995 11.1368 98.9545 13.2906 99.2592 16.0643C99.6059 18.7172 99.3485 21.3911 99.5376 24.065ZM95.1511 32.1496C96.4329 30.3373 96.7271 28.1099 96.5958 25.9456C94.8727 27.5268 95.1354 30.0326 95.1511 32.1496ZM83.7622 30.1219C84.4706 31.0663 85.407 31.8156 86.4837 32.2997C87.5604 32.7839 88.7424 32.9871 89.9189 32.8904C88.0383 31.6296 86.0421 30.4424 83.7622 30.1219ZM84.9704 14.4463C86.373 13.1908 87.928 12.1244 89.3096 10.8531C86.2837 12.0771 82.9479 13.7004 81.6189 16.8943C81.0305 18.0185 81.4928 19.2688 81.6504 20.435C82.6275 18.381 83.2211 16.0118 84.9704 14.4463Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M96.5958 25.9456C96.7114 28.1099 96.4329 30.3372 95.1512 32.1496C95.1354 30.0326 94.8727 27.5268 96.5958 25.9456Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M93.2811 388.974C93.5963 393.67 92.9501 398.955 89.4725 402.427C87.1664 404.928 83.4366 405.579 80.2269 404.791C78.1256 404.429 75.8982 403.215 75.2678 401.019C74.5481 398.256 75.6513 395.462 76.8438 393.003C78.4664 389.698 80.6773 386.717 83.3683 384.204C84.6461 382.949 86.1603 381.96 87.823 381.294C88.6269 380.98 89.4772 380.803 90.3393 380.768C92.6087 382.812 93.071 386.085 93.2811 388.974ZM89.525 397.101C90.3235 393.917 91.143 390.634 90.8489 387.33C88.7948 390.124 89.1626 393.844 89.525 397.101ZM80.8573 402.669C82.1916 403 84.6606 404.276 85.333 402.58C83.9461 401.666 82.3071 402.338 80.8573 402.669Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M90.849 387.33C91.1432 390.634 90.3237 393.917 89.5252 397.101C89.1627 393.844 88.795 390.124 90.849 387.33Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M89.919 32.8904C88.7424 32.9871 87.5605 32.7839 86.4837 32.2998C85.407 31.8156 84.4707 31.0663 83.7622 30.1219C86.0421 30.4424 88.0383 31.6296 89.919 32.8904Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M89.3096 10.8531C87.928 12.1244 86.373 13.1908 84.9704 14.4463C83.2211 16.0223 82.6222 18.381 81.6504 20.435C81.4928 19.2688 81.0305 18.0185 81.6189 16.8943C82.9479 13.7004 86.3047 12.0771 89.3096 10.8531Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M85.3332 402.58C84.6607 404.276 82.1812 403 80.8574 402.669C82.3073 402.338 83.9463 401.666 85.3332 402.58Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M83.3262 41.2166C83.7832 44.6733 81.5874 48.0826 78.509 49.5377C76.6861 50.4728 74.5848 50.4098 72.5939 50.373C71.4171 47.158 68.0446 46.0338 65.2709 44.5945C62.6443 43.3179 61.0316 40.7754 58.7306 39.0786C57.0811 37.8336 54.8958 37.9807 52.9941 37.3976C53.1097 35.0441 54.339 32.9744 55.3476 30.9151C56.3562 28.8558 57.3333 26.7861 58.9881 25.2049C60.9475 23.4713 63.4638 22.6098 65.7805 21.4751C67.7136 20.6031 69.6994 19.4841 71.8952 19.689C72.8069 19.7638 73.691 20.0378 74.4852 20.4917C75.2795 20.9455 75.9644 21.5681 76.4918 22.3156C77.8891 24.1542 79.3442 26.1504 79.5911 28.5196C79.796 29.7174 79.8118 31.0044 80.4422 32.0866C82.1022 34.876 82.8954 38.0595 83.3262 41.2166ZM79.8748 42.0624C80.3424 39.5041 80.5367 36.6096 78.6823 34.5241C78.5548 37.0922 78.9609 39.659 79.8748 42.0624ZM60.6796 34.5976C63.9261 29.4915 69.2896 24.7163 75.7195 25.1418C72.2839 23.7497 68.6382 25.3362 65.7384 27.2431C63.2589 28.9504 60.564 31.2671 60.6796 34.5976Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M78.6826 34.524C80.5369 36.6253 80.3426 39.5041 79.8751 42.0624C78.9611 39.659 78.5551 37.0922 78.6826 34.524Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M75.741 369.826C77.2119 372.836 78.3676 376.13 78.3991 379.523C77.9999 383.82 77.0333 388.207 74.7691 391.937C73.5609 393.823 71.654 394.952 69.5895 395.693C68.5072 396.076 67.3996 396.383 66.2747 396.612C64.3835 396.974 62.1719 397.3 60.5539 396.003C58.0744 394.122 57.2707 390.896 56.6876 387.997C56.1623 384.845 55.4058 381.724 55.4898 378.541C55.4531 376.408 56.8714 374.753 58.5052 373.535C58.8782 373.256 59.2617 373.009 59.6399 372.768C62.0353 371.192 65.0087 371.901 67.6878 371.596C69.8469 371.407 71.6067 370.02 73.6134 369.327C74.3331 369.096 75.4731 368.859 75.741 369.826ZM75.1369 384.12C75.9616 381.877 76.7128 379.103 75.0738 377.044C74.6009 379.381 74.6224 381.791 75.1369 384.12ZM62.1404 392.367C63.3539 393.565 65.098 393.838 66.6897 394.222C64.6987 392.95 62.4871 391.816 61.2369 389.709C59.2774 387.041 58.7311 383.71 57.3127 380.779C56.5562 385.265 59.1041 389.347 62.1404 392.367Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M75.72 25.1208C69.2901 24.7163 63.9265 29.4915 60.68 34.5766C60.5697 31.2461 63.2594 28.9294 65.7546 27.2221C68.6387 25.3152 72.2844 23.7287 75.72 25.1208Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M75.0738 377.033C76.7286 379.093 75.9616 381.866 75.1369 384.109C74.6224 381.781 74.6009 379.371 75.0738 377.033Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M70.0514 48.3033C71.8638 49.7059 72.2 52.2327 72.0056 54.3708C71.4803 57.943 68.7907 60.7009 65.9592 62.6971C63.8264 64.231 61.0159 65.0453 58.4418 64.3781C58.1048 64.2906 57.7747 64.1782 57.4542 64.0419C55.3214 63.0858 53.4408 61.6622 51.329 60.6536C49.5534 59.8551 48.7707 57.8274 47.0056 57.0184C45.2405 56.2094 43.3284 56.3302 41.4845 56.2987C41.3952 53.9295 41.2428 51.1821 42.325 49.0388C42.724 48.2363 43.3072 47.5396 44.027 47.0058C47.0897 44.6838 49.1069 41.1064 52.6003 39.3624C55.8678 38.1331 58.7886 40.5863 60.9686 42.7139C63.5164 45.3195 67.262 46.0812 70.0514 48.3033ZM64.1941 55.6578C65.2209 54.6947 65.9671 53.471 66.3532 52.1171C64.6774 53.7351 62.7968 55.1377 61.1735 56.7977C60.0861 57.7538 60.4276 59.2405 60.5221 60.475C61.4803 58.6861 62.7201 57.0632 64.1941 55.6683V55.6578ZM55.9571 47.4313C56.8974 46.0077 58.6257 46.906 59.9338 47.0898C58.7371 45.5673 57.4005 44.1603 55.9413 42.8873C56.1147 43.8118 56.3038 44.7416 56.4981 45.6609C55.6629 46.2808 54.6438 46.7694 54.1027 47.6992C54.0055 48.4606 53.9897 49.2301 54.0554 49.9948C53.1142 51.0106 52.2716 52.1134 51.5391 53.2886L52.5267 54.7543C52.7134 53.8334 52.9555 52.9247 53.2517 52.0331C54.1657 51.4132 55.2636 51.1663 56.2933 50.8038C55.9256 49.7217 54.8434 48.4346 55.9571 47.4418V47.4313ZM55.6944 58.5156C54.8329 57.4019 54.0344 56.0886 52.6528 55.558C51.2712 55.0274 49.7793 55.4057 48.3872 55.6263C50.8299 56.5876 53.467 57.0604 55.6944 58.5261V58.5156ZM45.251 53.0417C45.3681 51.4401 45.6123 49.8504 45.9812 48.2876C45.2248 49.1753 44.0848 49.9423 43.9903 51.2031C43.7539 52.1276 44.7257 52.5321 45.251 53.0522V53.0417Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M69.5894 395.693L69.8048 396.281C67.5564 397.09 65.3501 398.046 62.9074 397.889C60.2072 397.647 58.0849 395.535 57.1288 393.113C55.763 390.398 55.9679 387.12 54.2028 384.582C52.7739 382.444 51.8283 380.017 50.3259 377.926C48.8498 375.636 45.535 376.009 43.8697 373.892C42.2938 372.437 41.5268 370.535 40.8491 368.586L41.7527 368.25C41.9528 368.854 42.2096 369.438 42.5196 369.994C43.7436 372.505 45.8502 374.906 48.771 375.289C51.6693 375.522 54.5572 374.728 56.9292 373.046L57.4072 372.71L58.5209 373.524C56.8872 374.743 55.4688 376.398 55.5056 378.531C55.4215 381.724 56.1832 384.834 56.7033 387.986C57.2864 390.886 58.0902 394.112 60.5697 395.992C62.1877 397.29 64.3993 396.964 66.2904 396.602C67.4098 396.375 68.5121 396.072 69.5894 395.693Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M66.3848 355.206C67.4354 359.272 67.1675 363.984 64.3256 367.289C62.5395 369.705 59.8183 371.045 57.3913 372.705L56.9133 373.041C54.5412 374.723 51.6534 375.517 48.755 375.284C45.8343 374.9 43.7277 372.5 42.5037 369.989C42.1937 369.433 41.9369 368.849 41.7368 368.245C41.3273 367.046 41.1628 365.777 41.253 364.514C41.3433 363.251 41.6864 362.018 42.2621 360.89C44.1217 357.213 47.6519 354.749 51.4237 353.242C51.949 353.026 52.5058 352.832 53.0469 352.653C55.1482 352.06 57.2915 351.224 59.4926 351.571C62.0141 352.291 64.0524 354.066 66.3848 355.206ZM63.4167 362.261C63.1278 359.498 61.783 356.43 58.6889 355.957C60.2228 358.085 61.9091 360.107 63.4167 362.261ZM54.4863 367.478C55.0641 366.453 55.8941 365.487 56.0622 364.284C55.7576 362.65 54.3812 361.547 53.3411 360.365C53.6825 359.708 54.0188 359.041 54.3602 358.39C52.863 359.157 51.3764 359.966 49.958 360.853C50.8616 361.079 51.7756 361.289 52.6792 361.536C53.4619 362.445 54.2551 363.354 55.0064 364.284C54.7857 365.345 54.6019 366.401 54.4653 367.478H54.4863ZM57.3493 367.898C56.483 367.965 55.6238 368.104 54.7805 368.313C53.8349 368.781 53.9977 370.047 53.672 370.898C54.9643 369.991 56.1865 368.988 57.3283 367.898H57.3493ZM45.2249 368.486C44.8992 367.404 45.9183 364.52 43.8906 365.303C43.7014 366.553 44.4632 367.578 45.2039 368.486H45.2249Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M66.3429 52.1276C65.9568 53.4814 65.2106 54.7051 64.1838 55.6682C62.7053 57.0722 61.4635 58.706 60.5066 60.5064C60.412 59.2509 60.0706 57.7643 61.158 56.8292C62.797 55.1482 64.6776 53.7456 66.3429 52.1276Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M66.6947 394.222C65.1188 393.838 63.359 393.565 62.1455 392.367C59.1039 389.347 56.5561 385.265 57.3178 380.784C58.7361 383.71 59.2825 387.041 61.2419 389.715C62.4764 391.816 64.7038 392.951 66.6947 394.222Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M64.0787 71.7431C64.3406 75.2753 63.6723 78.8144 62.1403 82.0079C60.4698 85.2964 56.3618 86.2682 52.9682 85.8795C51.4868 84.729 50.4729 83.048 48.8234 82.0919C47.5388 81.3363 46.205 80.6676 44.831 80.0905C41.3376 78.5933 37.6393 77.5584 34.0514 76.3134C33.9673 71.2703 34.6765 65.8543 37.7917 61.72C39.5109 59.9063 41.6429 58.5348 44.0062 57.7223C46.4332 57.4018 47.8148 59.6187 49.3435 61.0528C51.2084 62.219 53.2308 63.1121 55.122 64.2888C56.0819 64.7994 57.1096 65.1709 58.1741 65.392C59.2377 65.6103 60.2348 66.0765 61.0844 66.7526C62.6183 67.9923 64.0262 69.6628 64.0787 71.7431ZM58.878 76.9963C59.4034 74.0177 58.7467 70.9761 57.8537 68.1341C56.7085 70.2775 57.6803 72.6572 57.9587 74.8898C58.2634 76.7389 57.3073 78.4567 56.7663 80.1745C57.5858 79.2027 58.6679 78.3096 58.878 76.9911V76.9963ZM49.7847 67.6929C50.5517 67.5405 51.3187 67.3987 52.0909 67.2569C50.3818 66.2174 48.8124 64.964 47.4208 63.5271C47.6321 64.7916 48.1557 65.9833 48.9442 66.9942C48.5818 69.1375 49.6534 71.4647 48.0774 73.298C48.1615 73.5292 48.3401 74.002 48.4294 74.2331C49.1228 73.256 50.0474 72.363 50.3784 71.181C50.3213 69.997 50.122 68.8241 49.7847 67.6876V67.6929ZM49.8688 76.3659C48.9022 75.5569 47.9776 74.6219 46.7799 74.1596C45.8291 73.7236 44.915 74.459 44.0482 74.7427C45.9502 75.411 47.8947 75.9515 49.8688 76.3607V76.3659ZM41.9417 61.0791C40.6652 61.6937 39.1522 62.2506 38.6112 63.7057C37.5605 66.2588 37.1928 69.0324 36.6832 71.7273C36.263 73.5502 38.0701 74.5588 39.3098 75.4781C38.7215 74.2857 37.4817 73.1877 37.8127 71.7431C38.6007 67.9976 39.3098 64.0209 41.9417 61.0738V61.0791Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M58.7153 355.931C61.7832 356.43 63.128 359.498 63.4432 362.235C61.9093 360.107 60.223 358.085 58.7153 355.931Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M59.7183 334.918C61.683 335.78 61.8459 338.286 61.9247 340.172C61.6252 345.183 57.4699 348.86 53.2306 350.92C52.4706 351.27 51.6967 351.594 50.9087 351.891C46.2798 353.625 41.326 354.317 36.3993 353.919C34.6763 353.699 32.1967 353.331 31.7712 351.293L31.7397 351.093C31.2839 347.996 31.2344 344.852 31.5926 341.742C32.2966 339.026 35.0387 337.697 37.3712 336.647C40.3918 335.36 43.0551 333.159 46.3857 332.691C46.8532 332.596 47.3207 332.523 47.7935 332.47C51.912 332.024 56.0673 333.085 59.7183 334.918ZM55.7732 344.742C54.7961 342.415 55.9675 340.056 55.8572 337.697C55.8572 336.479 54.3285 336.552 53.5563 336.043C55.0692 338.617 54.0501 341.679 54.8013 344.448L55.7732 344.742ZM47.4311 345.703L50.6092 344.437C49.4605 344.346 48.3118 344.271 47.1631 344.211C46.6378 343.429 46.1598 342.635 45.6555 341.884L45.23 343.917C43.7645 345.104 42.7518 346.758 42.3617 348.603C43.5122 347.552 44.5891 346.454 45.6345 345.32C46.2333 346.144 46.8322 346.969 47.4416 347.789C47.4311 347.09 47.4311 346.397 47.4311 345.703ZM49.4273 348.183C48.7425 348.156 48.0569 348.167 47.3733 348.214C46.1913 348.587 46.2018 350.032 45.8341 350.993C47.0988 350.143 48.3013 349.204 49.4325 348.183H49.4273ZM47.1054 339.525C47.5519 338.427 46.932 337.345 46.58 336.321C46.2859 337.303 46.0547 338.301 45.6922 339.273C45.1669 340.996 43.4124 341.837 42.2146 343.04C44.2371 342.625 46.4277 341.632 47.1106 339.525H47.1054Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M57.8538 68.1447C58.7468 70.9866 59.3824 74.0282 58.8781 77.0068C58.668 78.3254 57.5858 79.2184 56.7769 80.1587C57.3022 78.4409 58.274 76.7231 57.9693 74.874C57.6804 72.6519 56.7086 70.2722 57.8538 68.1447Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M58.4629 64.3781L58.1897 65.392C57.1252 65.1709 56.0975 64.7994 55.1376 64.2888C53.2674 63.1121 51.245 62.219 49.3591 61.0528C47.8304 59.6187 46.4488 57.4019 44.0218 57.7223C41.6585 58.5348 39.5265 59.9063 37.8073 61.72C34.6921 65.8543 33.9829 71.2703 34.067 76.3134C37.6549 77.5584 41.3532 78.5933 44.8466 80.0905L44.4841 80.9415C42.5036 80.1115 40.3288 79.7332 38.3063 79.0346C35.9896 78.3569 33.6047 77.0541 31.1462 77.8894C28.4828 78.6668 25.7144 79.8068 23.9283 82.0289C22.9579 83.4604 22.273 85.0657 21.911 86.7568L20.7974 86.4679C21.1551 84.714 21.849 83.0461 22.8409 81.5561C24.1121 79.77 26.266 78.9873 27.8157 77.5111C28.5406 75.3048 28.2884 72.9198 28.6614 70.6452C29.0712 66.6895 31.288 63.2592 33.4208 60.0337C35.5221 57.0499 37.76 54.1921 39.8402 51.2031C40.4234 50.3468 40.9277 49.417 41.4792 48.5239L42.325 49.0492C41.2429 51.1926 41.3952 53.94 41.4845 56.3092C43.3336 56.3407 45.2826 56.2199 47.0056 57.0289C48.7287 57.8379 49.5534 59.8656 51.329 60.6641C53.4303 61.6727 55.3215 63.0963 57.4543 64.0524C57.7818 64.1861 58.119 64.295 58.4629 64.3781Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M59.9337 47.1003C58.6256 46.9217 56.8973 46.0181 55.957 47.4417C54.8433 48.4346 55.9255 49.7216 56.2932 50.7933C55.2426 51.1558 54.1657 51.4027 53.2516 52.0225C52.9554 52.9142 52.7133 53.8229 52.5267 54.7437L51.5391 53.2781C52.2716 52.1029 53.1141 51 54.0553 49.9843C53.9896 49.2196 54.0055 48.45 54.1026 47.6887C54.6279 46.7588 55.6786 46.2703 56.4981 45.6504C56.3037 44.7311 56.1146 43.8013 55.9412 42.8767C57.4014 44.1564 58.7381 45.5705 59.9337 47.1003Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M56.9656 93.7436C57.659 99.9214 55.0535 105.947 51.8017 111.079C50.2835 113.38 48.4186 115.807 45.6344 116.569C43.0349 117.373 40.268 117.471 37.6181 116.852C34.9986 116.261 32.5072 115.202 30.2636 113.727C26.6388 111.998 24.1331 108.789 21.2806 106.089C19.5943 104.282 17.43 102.285 17.6611 99.5746C17.9448 96.7694 19.6888 94.4265 20.5504 91.7946C21.0912 90.149 21.5453 88.4762 21.911 86.7831C22.2729 85.092 22.9578 83.4867 23.9282 82.0552C25.7143 79.8331 28.4827 78.6931 31.1461 77.9157C33.6046 77.0804 35.9896 78.3832 38.3062 79.0609C40.3287 79.7595 42.5088 80.1378 44.484 80.9678C45.1494 81.2429 45.7864 81.5824 46.3857 81.9816C48.6363 83.5312 50.768 85.2468 52.763 87.114C54.7855 88.8318 56.7345 90.9594 56.9656 93.7436ZM46.1125 107.349C47.4045 104.292 47.5628 100.874 46.559 97.7098C46.2491 99.9949 46.2806 102.322 45.8131 104.586C45.2877 107.066 43.0078 108.474 41.4476 110.254C43.2285 109.766 45.3298 109.193 46.1125 107.349ZM45.9181 90.0978L46.3174 88.5219C43.7275 88.4956 41.0642 88.5744 38.6162 87.6814C39.4777 88.4168 40.3532 89.1383 41.2428 89.8457C39.0469 90.5549 37.0402 91.9102 36.247 94.1743C33.6553 93.5009 30.9871 93.1671 28.3094 93.1815C28.6088 91.3219 28.7716 89.3466 27.7578 87.6604C27.2325 90.0611 27.1274 92.5196 26.7859 94.9466L28.3199 93.7173C30.9465 94.5368 33.6886 94.8205 36.2417 95.8186C37.4079 97.778 37.6023 100.483 36.2732 102.422C35.2226 103.945 33.8305 105.154 32.596 106.488C34.608 105.28 36.6147 103.814 37.6863 101.66C38.4323 100.279 38.2117 98.6658 38.2117 97.1634C38.9471 98.2718 39.6195 99.4748 40.6597 100.342C41.663 101.082 42.9185 101.329 44.0848 101.707C41.0852 100.011 39.3096 97.0426 37.4342 94.2742C38.8 90.786 43.1444 91.4899 45.9181 90.0978Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M56.225 317.541C56.6295 322.132 55.3004 327.343 51.4235 330.185C50.3729 331.031 49.0333 331.189 47.7148 331.32C47.1159 331.378 46.517 331.43 45.9392 331.541C42.7347 331.929 40.1607 333.994 37.2346 335.218C35.4065 335.985 33.799 337.198 31.9551 337.923C29.8539 338.254 27.7526 337.235 26.1766 335.948C24.0753 334.204 22.0844 331.95 21.7219 329.119C21.4744 326.615 20.8196 324.168 19.7835 321.875C19.5733 321.349 19.3474 320.824 19.1268 320.299C18.0762 317.798 17.1411 315.045 18.57 312.545C19.7414 309.719 22.7725 308.652 25.0734 306.992C26.3429 306.093 27.7376 305.385 29.213 304.891C32.6748 303.772 34.6553 300.31 38.0594 299.06C39.456 298.55 40.9606 298.409 42.4276 298.651C43.8946 298.893 45.2742 299.51 46.433 300.442C48.2762 301.938 49.8319 303.757 51.0243 305.81C53.2096 309.493 55.8362 313.149 56.225 317.541ZM52.0854 318.675C52.2693 315.523 52.8787 310.796 49.2277 309.414C49.9474 311.368 50.8719 313.275 51.1556 315.361C51.4235 316.464 51.3395 317.746 52.0854 318.675ZM49.0858 325.368C46.5328 325.174 44.7099 327.18 43.7696 329.324C45.752 328.314 47.5494 326.977 49.0858 325.368ZM44.1478 326.277C42.8976 325.006 41.0905 324.023 40.5704 322.216C40.2184 319.001 42.1464 316.196 43.0709 313.238C41.3111 314.531 40.2027 316.427 39.3937 318.413L37.0296 317.504C37.2294 316.832 37.4342 316.17 37.6391 315.513C36.5121 316.558 35.1581 317.328 33.6834 317.761C32.3596 318.092 32.0234 319.59 31.4036 320.603C32.7946 320.19 34.1579 319.688 35.4853 319.101C36.7618 318.549 38.1802 318.933 39.5093 318.975C39.567 320.404 39.3937 321.89 39.8296 323.277C40.5546 325.027 42.5088 325.657 44.1478 326.277ZM38.9314 325.258C37.3118 324.935 35.6566 324.829 34.0091 324.943C32.2388 325.221 30.7627 326.324 29.2392 327.186C28.3777 326.387 27.5109 325.61 26.6126 324.843C27.3323 327.054 28.2254 329.203 29.0659 331.372C29.1972 330.275 29.3285 329.182 29.4494 328.089C31.2932 327.359 33.0478 326.329 35.0388 326.061C36.3515 325.873 37.6514 325.605 38.9314 325.258ZM25.7511 312.944C27.1423 311.755 28.2559 310.276 29.0133 308.61C25.7406 310.664 22.3785 313.711 22.2367 317.851C23.2663 316.122 24.2592 314.336 25.7511 312.944Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M55.8362 337.697C55.9465 340.056 54.7855 342.425 55.7521 344.742L54.7855 344.463C54.0343 341.685 55.0535 338.622 53.5405 336.058C54.3285 336.552 55.8729 336.479 55.8362 337.697Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M56.0204 364.284C55.8733 365.487 55.0433 366.453 54.4444 367.478C54.581 366.427 54.7543 365.345 54.9697 364.284C54.208 363.354 53.4253 362.445 52.6425 361.536C51.739 361.289 50.8249 361.079 49.9214 360.853C51.3398 359.945 52.8264 359.157 54.3236 358.39C53.9821 359.041 53.6459 359.708 53.3044 360.365C54.3393 361.547 55.7157 362.65 56.0204 364.284Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M54.7857 368.313C55.629 368.104 56.4882 367.965 57.3545 367.898C56.206 368.989 54.9767 369.992 53.6772 370.898C53.9767 370.047 53.8138 368.781 54.7857 368.313Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M52.6528 55.5685C54.0344 56.0938 54.8329 57.4123 55.6944 58.526C53.4671 57.0604 50.8299 56.5876 48.3872 55.6368C49.7793 55.4161 51.2922 54.9643 52.6528 55.5685Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M49.228 309.414C52.9053 310.811 52.2696 315.529 52.0858 318.675C51.3398 317.746 51.4239 316.464 51.156 315.361C50.8723 313.275 49.9477 311.368 49.228 309.414Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M50.9089 351.87L51.4342 353.226C47.6624 354.733 44.1322 357.187 42.2726 360.874C41.6969 362.003 41.3538 363.235 41.2636 364.498C41.1733 365.762 41.3378 367.03 41.7473 368.229L40.8437 368.565C40.4392 367.399 40.0768 366.212 39.6092 365.093C37.0194 361.993 35.89 358.059 33.8044 354.66C32.866 354.204 31.9844 353.64 31.1778 352.979C30.9747 352.492 30.8301 351.982 30.7471 351.461L31.7977 351.287C32.197 353.32 34.7027 353.688 36.4258 353.914C41.3449 354.303 46.2894 353.605 50.9089 351.87Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M52.091 67.2516C51.3188 67.3934 50.5518 67.5353 49.7848 67.6876C50.1233 68.8292 50.3226 70.0074 50.3785 71.1968C50.0475 72.3787 49.1229 73.2718 48.4295 74.2489C48.3402 74.0177 48.1616 73.545 48.0775 73.3138C49.6535 71.4594 48.6029 69.1112 48.9443 67.01C48.1559 65.9991 47.6322 64.8073 47.4209 63.5428C48.8138 64.9724 50.3831 66.2187 52.091 67.2516Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M50.6149 344.463L47.4314 345.703C47.4314 346.397 47.4314 347.085 47.4314 347.805C46.822 346.985 46.2232 346.16 45.6243 345.335C44.5737 346.47 43.523 347.584 42.3516 348.619C42.7416 346.774 43.7543 345.119 45.2198 343.933L45.6453 341.9C46.1706 342.667 46.6487 343.444 47.153 344.227C48.3087 344.28 49.4627 344.358 50.6149 344.463Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M47.3785 348.214C48.0622 348.167 48.7478 348.156 49.4325 348.183C48.303 349.204 47.1023 350.143 45.8394 350.993C46.2071 350.032 46.1966 348.587 47.3785 348.214Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M43.7539 329.324C44.6942 327.18 46.5171 325.174 49.0702 325.368C47.5337 326.977 45.7363 328.314 43.7539 329.324Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M46.78 74.1544C47.9777 74.6166 48.8813 75.5517 49.8689 76.3607C47.8947 75.9498 45.9502 75.4075 44.0483 74.7375C44.9151 74.4485 45.8554 73.7183 46.78 74.1544Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M47.7147 331.33L47.8303 332.497C47.3575 332.549 46.89 332.623 46.4224 332.717C43.0919 333.185 40.4285 335.386 37.4079 336.673C35.0597 337.724 32.3176 339.053 31.6294 341.769C31.2712 344.879 31.3206 348.022 31.7765 351.119L31.808 351.319L30.7573 351.492C30.4789 349.948 30.5525 348.309 29.9536 346.843C27.9521 343.166 23.9019 341.012 22.2261 337.119C20.6975 333.248 20.0461 329.108 19.6311 324.99C19.2292 323.539 18.738 322.114 18.1602 320.724L19.1478 320.325C19.3684 320.85 19.5943 321.376 19.8044 321.901C20.823 324.199 21.46 326.647 21.6903 329.15C22.0528 331.966 24.0332 334.22 26.145 335.98C27.7578 337.267 29.8223 338.286 31.9236 337.955C33.7674 337.23 35.3749 336.016 37.203 335.249C40.1028 334.01 42.7032 331.945 45.9076 331.572C46.517 331.43 47.1158 331.378 47.7147 331.33Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M46.5961 336.321C46.9376 337.372 47.5575 338.422 47.1214 339.525C46.4385 341.627 44.2479 342.625 42.2412 343.04C43.4389 341.837 45.1883 340.996 45.7188 339.273C46.055 338.301 46.3019 337.303 46.5961 336.321Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M46.5591 97.7097C47.563 100.874 47.4046 104.292 46.1126 107.349C45.3036 109.193 43.2128 109.766 41.4478 110.254C43.0237 108.474 45.3089 107.066 45.8132 104.586C46.2807 102.322 46.2492 99.9949 46.5591 97.7097Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M46.5328 282.901C47.2367 286.237 48.2243 290.256 45.8551 293.161C43.1865 296.081 39.0943 296.838 35.8268 298.881C33.7255 299.969 32.1758 301.855 30.0798 302.911C27.8629 303.509 25.562 303.725 23.3084 304.129C21.0547 304.534 18.4544 304.513 16.8732 302.716C15.2962 300.252 16.101 296.179 16.08 294.437C16.3531 290.975 14.2518 287.897 14.3464 284.456C14.152 280.222 16.4477 275.872 20.2825 273.95C24.8896 271.323 30.3844 272.305 35.3908 271.228C37.45 270.94 39.7562 270.892 41.4477 272.279C44.8045 274.759 45.5189 279.14 46.5328 282.901ZM42.7032 293.119C44.6049 291.543 45.1249 288.979 44.8045 286.62C44.3632 283.679 44.027 280.637 42.782 277.905C42.1149 276.382 40.6282 275.52 39.2781 274.69C42.2304 278.551 43.4544 283.405 44.006 288.154C44.2372 289.925 43.3651 291.543 42.7032 293.119ZM33.9461 295.461C34.9285 295.183 35.9686 295.341 36.9772 295.288C36.2365 294.71 35.5799 293.843 34.5765 293.765C32.6591 294.206 31.5559 296.013 31.1356 296.815C32.0111 296.96 32.9506 296.173 33.9461 295.461ZM37.9228 286.226C36.0421 285.953 33.5784 285.092 32.1127 286.778C31.1409 287.713 31.5612 289.095 31.7345 290.25C32.3649 289.231 32.8692 288.112 33.6835 287.224C35.0335 286.678 36.5044 286.536 37.9228 286.226ZM32.5698 293.056C31.1041 289.725 29.2813 286.557 28.1623 283.074L27.8524 282.98C27.4628 283.925 27.4384 284.981 27.7841 285.943C28.832 288.638 30.4668 291.066 32.5698 293.05V293.056ZM25.6093 282.649C27.3835 282.625 29.1047 282.04 30.5263 280.978C27.968 281.246 25.3991 281.225 22.8303 281.252C23.7 281.821 24.6325 282.288 25.6093 282.644V282.649ZM21.932 287.681C23.8915 287.44 25.8719 287.734 27.8471 287.681C25.5725 286.436 22.6622 285.817 20.2195 286.893C18.9114 287.592 19.5733 289.152 19.7992 290.266C20.4138 289.336 20.5977 287.729 21.9583 287.676L21.932 287.681Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M46.3174 88.5008L45.9182 90.0768C43.1445 91.4689 38.8001 90.7649 37.4343 94.211C39.3097 96.9795 41.0853 99.9475 44.0848 101.644C42.9186 101.266 41.6631 101.019 40.6597 100.278C39.6091 99.4117 38.9472 98.2087 38.2117 97.1003C38.2117 98.6027 38.4061 100.215 37.6864 101.597C36.6358 103.751 34.608 105.217 32.5961 106.425C33.8516 105.09 35.2594 103.882 36.2733 102.359C37.6024 100.42 37.408 97.7149 36.2418 95.7555C33.6887 94.7784 30.9255 94.4947 28.3199 93.6542L26.7808 94.936C27.1222 92.509 27.222 90.0505 27.7526 87.6498C28.7665 89.3361 28.6036 91.327 28.3042 93.1709C30.9819 93.1565 33.6501 93.4903 36.2418 94.1638C37.0298 91.8996 39.0418 90.5443 41.2376 89.8351C40.3516 89.1347 39.476 88.4132 38.611 87.6708C41.0853 88.5533 43.7539 88.4745 46.3174 88.5008Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M45.3301 124.879C46.7432 127.101 45.7188 129.775 45.0254 132.05C43.7541 136.069 42.1782 140.508 38.3013 142.74C34.3456 144.952 29.3236 146.255 25.0107 144.316C20.246 142.42 16.7001 138.585 12.4293 135.911C10.1599 134.277 7.22858 132.607 6.83984 129.56C7.07624 126.807 8.78879 124.485 9.60303 121.89C10.4435 119.789 10.5013 117.541 10.6537 115.329C10.6904 112.314 13.732 110.454 16.3271 109.739C18.1815 109.377 20.2355 109.288 21.9901 110.102C23.939 111.258 25.5255 112.965 27.6005 113.926C29.7701 114.914 31.9082 115.986 34.146 116.8C35.2448 117.117 36.3648 117.356 37.4976 117.514C38.6073 117.665 39.6275 118.205 40.3763 119.038C42.1867 120.844 43.8437 122.798 45.3301 124.879ZM41.427 130.616C41.5163 127.905 40.4341 124.869 37.5659 124.076C38.7794 126.292 40.2818 128.346 41.427 130.611V130.616ZM36.7569 138.574C37.2822 135.06 34.4402 132.549 32.1235 130.4C30.3637 128.746 27.9945 127.937 26.2347 126.298C26.1244 123.146 26.303 119.805 24.5904 116.968C24.5064 119.768 24.748 122.568 24.8531 125.373C23.5818 124.774 22.3578 123.939 20.9342 123.745C19.3582 123.745 17.8243 124.091 16.2588 124.086C16.1118 122.242 16.2011 120.409 16.075 118.539C14.5463 120.64 14.9193 123.377 14.541 125.814C14.9072 125.424 15.2948 125.054 15.702 124.706C18.8539 124.548 22.2423 124.811 24.5747 127.17C23.4295 127.994 22.1109 128.656 21.1916 129.765C20.8134 130.747 20.9342 131.866 20.8239 132.88C21.5121 130.458 23.5555 129.019 25.4887 127.627C29.1716 129.314 32.4619 131.751 35.1494 134.782C36.0162 135.869 36.2683 137.287 36.7569 138.569V138.574Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M45.9811 48.298C45.6122 49.8608 45.368 51.4506 45.2509 53.0521C44.7256 52.5268 43.759 52.1276 43.9902 51.2135C44.0847 49.9527 45.2247 49.1858 45.9811 48.298Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M43.8697 365.303C45.8975 364.52 44.8784 367.404 45.2041 368.486C44.4634 367.577 43.7016 366.553 43.8697 365.303Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M44.8048 286.62C45.1463 288.979 44.6262 291.532 42.7036 293.119C43.3655 291.543 44.2375 289.925 43.9696 288.154C43.4443 283.426 42.2098 278.551 39.2417 274.69C40.5918 275.52 42.0784 276.382 42.7456 277.905C44.0064 280.637 44.3426 283.679 44.8048 286.62Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M40.5703 322.216C41.0956 324.023 42.8975 325.005 44.1477 326.277C42.5087 325.657 40.5545 325.037 39.8138 323.277C39.3778 321.89 39.5512 320.404 39.4934 318.975C38.1643 318.933 36.746 318.549 35.4694 319.101C34.1421 319.688 32.7788 320.19 31.3877 320.603C32.0076 319.589 32.3438 318.092 33.6676 317.761C35.1423 317.328 36.4963 316.558 37.6233 315.513C37.4184 316.17 37.2135 316.831 37.0139 317.504L39.3778 318.413C40.2026 316.427 41.311 314.531 43.0551 313.238C42.1778 316.196 40.2183 319.001 40.5703 322.216Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M42.1782 261.027C42.7928 263.223 42.3778 265.812 40.4762 267.252C36.137 271.039 30.017 270.362 24.7165 271.029C20.6296 272.079 16.2221 272.237 12.1719 270.976C8.61547 268.649 6.69279 263.958 7.87476 259.818C9.05673 255.679 12.0773 252.233 15.597 249.785C18.6543 247.684 21.6329 245.104 25.3837 244.374C28.709 243.849 32.7382 244.374 34.6609 247.526C37.5449 251.765 40.8124 255.989 42.1782 261.027ZM34.6294 259.65C33.7463 257.653 32.1314 256.07 30.1168 255.227C28.8981 254.507 27.6636 255.49 26.5237 255.873C23.9706 257.139 20.8397 256.189 18.3864 257.701C16.9786 258.71 17.2045 260.585 17.5617 262.056C18.0187 261.006 18.2761 259.792 18.9906 258.847C20.9342 258.032 23.0986 258.043 25.1526 257.712C25.7882 260.202 26.7706 262.582 27.527 265.04C26.2968 265.261 24.9004 265.119 23.8498 265.812C22.7991 266.506 23.046 268.034 22.8674 269.164C23.6974 268.25 24.4119 267.199 25.41 266.459C26.3012 266.231 27.2095 266.076 28.1259 265.996C27.8212 263.075 27.6006 260.076 26.1244 257.455C27.1383 256.871 28.1574 256.294 29.166 255.705C31.1895 256.722 33.0388 258.054 34.6451 259.65H34.6294ZM28.2572 247.804C29.8805 247.804 31.4354 248.33 33.0166 248.645C31.1465 247.594 29.082 245.934 26.8021 246.706C25.5413 247.001 24.9477 248.23 24.2543 249.186C25.5833 248.703 26.8599 248.041 28.2572 247.804Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M37.5659 124.07C40.4342 124.864 41.5163 127.9 41.427 130.611C40.2818 128.346 38.7794 126.292 37.5659 124.07Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M38.6108 63.69C39.1362 62.2453 40.6648 61.6885 41.9414 61.0634C39.3148 64.0104 38.6003 67.9871 37.7861 71.7169C37.4551 73.1615 38.6949 74.2594 39.2833 75.4519C38.0698 74.5326 36.2627 73.524 36.6567 71.7011C37.1925 69.0167 37.5707 66.243 38.6108 63.69Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M37.6182 116.826L37.4868 117.467C36.3541 117.309 35.234 117.07 34.1353 116.753C31.8974 115.938 29.7594 114.867 27.5898 113.879C25.5148 112.918 23.9125 111.21 21.9794 110.055C20.2248 109.241 18.1708 109.33 16.3164 109.692C13.7213 110.407 10.6797 112.266 10.6429 115.282C10.5011 117.493 10.4433 119.757 9.5923 121.843C8.77805 124.438 7.06551 126.76 6.82911 129.513L5.77847 129.565C5.70056 128.858 5.77032 128.143 5.98334 127.464C7.03399 123.955 8.98818 120.635 9.13527 116.921C9.31914 115.287 9.07748 113.396 10.2542 112.072C11.3048 110.817 12.7337 109.939 14.0523 108.973C14.4147 105.731 15.9067 102.753 16.1956 99.5169C16.5738 96.1023 18.7749 93.2961 19.7678 90.0611C20.1828 88.9054 20.4612 87.6866 20.7764 86.4836L21.8901 86.7726C21.5244 88.4657 21.0703 90.1385 20.5295 91.7841C19.668 94.4107 17.9029 96.7589 17.6402 99.5641C17.4091 102.275 19.5734 104.292 21.2597 106.078C24.1122 108.778 26.6179 111.988 30.2427 113.716C32.4939 115.189 34.9925 116.242 37.6182 116.826Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M37.4188 152.044C38.2278 155.758 38.6481 159.829 37.0091 163.391C34.435 169.143 28.3938 172.573 22.4524 173.824C18.2078 173.824 13.2593 173.519 10.2124 170.146C7.41774 167.215 7.45977 162.918 6.40388 159.241C5.73146 156.357 3.70898 153.546 4.6493 150.478C5.26952 148.594 6.33639 146.888 7.75885 145.506C9.1813 144.124 10.9171 143.107 12.818 142.541C14.8815 141.887 17.1131 142.012 19.0904 142.893C22.2423 144.279 25.3522 145.724 28.688 146.57C30.9784 147.263 33.3844 147.663 35.5434 148.729C36.7464 149.37 37.0879 150.835 37.4188 152.044ZM31.8767 157.213C32.5911 155.7 32.0973 154.024 31.8084 152.485C31.5825 153.982 31.7348 155.637 31.0204 157.003C29.4445 158.936 26.4711 158.889 24.2911 158.053C21.3177 157.087 19.5054 154.161 19.1902 151.151H18.6649C18.3234 153.562 19.0326 156.273 21.0183 157.812C22.9748 159.188 25.3461 159.846 27.7319 159.677C29.3814 159.593 31.178 158.799 31.8767 157.213ZM32.1236 162.077C31.7559 161.184 31.3811 160.296 30.9994 159.414L29.4812 160.149C30.3533 160.801 31.234 161.443 32.1236 162.077ZM23.7185 164.32C24.685 163.007 24.4959 161.31 24.5117 159.776C23.6449 161.352 22.899 163.023 21.5384 164.231C20.3716 165.26 19.3312 166.424 18.439 167.698C20.4037 166.942 22.4157 166.017 23.729 164.32H23.7185ZM21.0918 149.281C19.1181 149.204 17.1416 149.309 15.1872 149.596C16.0277 150.316 17.1131 150.685 18.2184 150.626C19.3236 150.567 20.3639 150.086 21.1234 149.281H21.0918ZM13.5115 160.564C15.9542 160.507 18.1133 159.099 19.8784 157.518C17.0311 158.437 14.1419 159.514 11.095 159.02C11.8725 159.593 12.5081 160.57 13.543 160.564H13.5115ZM9.92353 149.407C10.0549 147.62 11.4575 146.37 12.4661 145.025C11.4154 145.551 10.1231 145.892 9.51903 146.995C8.79599 148.263 8.37273 149.68 8.28168 151.137C8.19063 152.594 8.43419 154.052 8.99371 155.401C9.50327 153.431 9.69764 151.413 9.95505 149.407H9.92353Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M32.1235 130.395C34.4402 132.544 37.2664 135.055 36.7568 138.569C36.2683 137.287 36.0161 135.869 35.1494 134.771C32.4619 131.74 29.1715 129.303 25.4887 127.616C23.5555 129.008 21.512 130.448 20.8239 132.869C20.9342 131.819 20.8239 130.737 21.1916 129.754C22.1109 128.646 23.4294 127.984 24.5746 127.159C22.2422 124.801 18.8329 124.533 15.702 124.695C15.2947 125.043 14.9071 125.413 14.541 125.804C14.9192 123.366 14.541 120.63 16.075 118.528C16.201 120.377 16.1117 122.205 16.2588 124.076C17.8348 124.076 19.3687 123.729 20.9342 123.734C22.3578 123.929 23.5608 124.785 24.8531 125.363C24.748 122.563 24.5064 119.763 24.5904 116.958C26.303 119.794 26.1243 123.114 26.2347 126.287C27.9945 127.931 30.3637 128.74 32.1235 130.395Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M36.9775 295.288C35.9689 295.341 34.9288 295.183 33.9464 295.461C32.9546 296.174 32.0186 296.96 31.1465 296.815C31.5667 296.013 32.6699 294.206 34.5873 293.765C35.5802 293.843 36.2368 294.71 36.9775 295.288Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M34.0092 324.943C35.6566 324.829 37.3119 324.935 38.9314 325.258C37.6566 325.604 36.362 325.872 35.0546 326.061C33.0636 326.329 31.309 327.359 29.4652 328.089C29.3443 329.182 29.213 330.275 29.0817 331.373C28.2412 329.203 27.3481 327.054 26.6284 324.843C27.511 325.604 28.3777 326.387 29.255 327.186C30.7627 326.324 32.2388 325.221 34.0092 324.943Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M32.1128 286.778C33.5784 285.092 36.0422 285.953 37.9228 286.226C36.5045 286.536 35.0336 286.673 33.6835 287.224C32.8693 288.112 32.365 289.231 31.7346 290.25C31.5612 289.095 31.1462 287.729 32.1128 286.778Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M30.1323 255.227C32.1469 256.07 33.7618 257.653 34.6448 259.65C33.0369 258.045 31.1838 256.707 29.1552 255.684C28.1466 256.273 27.1275 256.85 26.1136 257.433C27.5687 260.06 27.8104 263.054 28.1151 265.975C27.1987 266.055 26.2903 266.21 25.3992 266.437C24.401 267.178 23.6866 268.229 22.8566 269.143C23.0352 268.013 22.72 266.516 23.839 265.791C24.9579 265.066 26.3132 265.266 27.5162 265.019C26.7597 262.561 25.7774 260.181 25.1418 257.691C23.0877 258.022 20.9392 258.011 18.9797 258.826C18.2653 259.771 18.0079 260.958 17.5509 262.035C17.1936 260.564 16.9678 258.689 18.3756 257.68C20.8289 256.167 23.9598 257.118 26.5128 255.852C27.679 255.49 28.9136 254.507 30.1323 255.227Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M31.8083 152.474C32.0973 154.05 32.5911 155.7 31.8766 157.202C31.1622 158.705 29.3813 159.582 27.7318 159.65C25.346 159.82 22.9748 159.161 21.0182 157.785C19.0325 156.246 18.3233 153.535 18.6648 151.124H19.1901C19.5053 154.134 21.2914 157.06 24.291 158.027C26.4711 158.841 29.4181 158.889 31.0203 156.976C31.7348 155.616 31.5824 153.972 31.8083 152.474Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M30.999 159.414C31.3807 160.296 31.7555 161.184 32.1232 162.077C31.2336 161.436 30.3581 160.794 29.4966 160.149L30.999 159.414Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M33.0163 248.64C31.4403 248.33 29.8643 247.815 28.2568 247.799C26.8595 248.041 25.583 248.703 24.2539 249.181C24.9473 248.225 25.5409 246.995 26.8017 246.701C29.0816 245.929 31.1461 247.568 33.0163 248.64Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M28.1624 283.074C29.2813 286.552 31.1042 289.72 32.5699 293.056C30.4669 291.071 28.8321 288.643 27.7842 285.948C27.4385 284.986 27.4629 283.93 27.8525 282.985L28.1624 283.074Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M30.5265 280.973C29.1049 282.035 27.3838 282.62 25.6095 282.644C24.6325 282.286 23.7 281.818 22.8306 281.246C25.3994 281.22 27.9945 281.241 30.5265 280.973Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M27.8735 287.666C25.8983 287.729 23.9178 287.435 21.9584 287.666C20.5978 287.718 20.4139 289.326 19.8256 290.24C19.5997 289.126 18.9378 287.566 20.2458 286.867C22.6886 285.801 25.5988 286.421 27.8735 287.666Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M29.0135 308.615C28.256 310.281 27.1424 311.761 25.7512 312.949C24.2593 314.336 23.2664 316.101 22.2368 317.856C22.3787 313.716 25.7407 310.669 29.0135 308.615Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M24.522 159.776C24.522 161.31 24.6954 163.007 23.7288 164.32C22.4155 166.017 20.4035 166.947 18.4756 167.698C19.3678 166.424 20.4082 165.26 21.575 164.231C22.9093 163.023 23.6552 161.331 24.522 159.776Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M15.2188 149.596C17.1731 149.309 19.1497 149.204 21.1234 149.281C20.3652 150.077 19.3314 150.553 18.2337 150.611C17.1359 150.67 16.0573 150.306 15.2188 149.596Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M19.9098 157.517C18.1448 159.093 15.9857 160.507 13.5429 160.564C12.4923 160.564 11.8724 159.592 11.1265 159.02C14.1733 159.514 17.0626 158.437 19.9098 157.517Z"
                            fill="#F9C1C4"/>
                        <path
                            d="M12.4974 145.025C11.4888 146.37 10.0862 147.62 9.9549 149.407C9.69749 151.413 9.50312 153.431 9.04609 155.411C8.48657 154.063 8.24301 152.604 8.33406 151.147C8.42511 149.691 8.84837 148.274 9.57141 147.006C10.1335 145.892 11.4573 145.561 12.4974 145.025Z"
                            fill="#F9C1C4"/>
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
                        <path
                            d="M219.852 110.774C218.776 112.19 217.507 113.447 216.08 114.509C214.919 115.366 213.653 116.073 212.314 116.611C210.085 117.432 207.785 118.042 205.443 118.434C203.08 118.907 200.685 119.197 198.277 119.3L219.852 110.774Z"
                            fill="white"/>
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
                        <path
                            d="M181.435 277.611C182.045 292.761 183.973 340.481 151.387 359.162C130.432 371.171 100.751 368.003 82.7171 352.721C69.2006 341.275 65.2397 325.578 61.2578 309.803C57.3077 294.025 56.3967 277.639 58.5734 261.521L63.4011 256.152C77.2374 251.009 91.6535 247.586 106.325 245.96C130.301 243.362 154.555 245.549 177.679 252.396C179.823 260.644 181.082 269.096 181.435 277.611Z"
                            fill="#E2969D"/>
                        <path
                            d="M69.8413 147.894C80.5407 139.859 92.9232 134.355 106.057 131.798C141.096 125.121 168.68 142.646 175.263 147.09"
                            stroke="#E2969D" stroke-width="5" stroke-miterlimit="10"/>
                        <path
                            d="M69.8413 135.218C80.5387 127.175 92.9214 121.665 106.057 119.101C141.096 112.424 168.68 129.949 175.263 134.393"
                            stroke="#E2969D" stroke-width="5" stroke-miterlimit="10"/>
                        <path
                            d="M69.8413 122.542C80.542 114.509 92.924 109.006 106.057 106.446C141.096 99.769 168.68 117.299 175.263 121.727"
                            stroke="#E2969D" stroke-width="5" stroke-miterlimit="10"/>

                        {Implant ? <circle onClick={() => setImUL5((prev) => !prev)} id="imUL5" cx="195" cy="71" r="4"
                                           fill={imUL5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL6((prev) => !prev)} id="imUL6" cx="204" cy="99" r="4"
                                           fill={imUL6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL7((prev) => !prev)} id="imUL7" cx="210" cy="129" r="4"
                                           fill={imUL7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL8((prev) => !prev)} id="imUL8" cx="216" cy="157" r="4"
                                           fill={imUL8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL4((prev) => !prev)} id="imUL4" cx="185" cy="52" r="4"
                                           fill={imUL4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL3((prev) => !prev)} id="imUL3" cx="173" cy="36" r="4"
                                           fill={imUL3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL2((prev) => !prev)} id="imUL2" cx="155" cy="21" r="4"
                                           fill={imUL2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUL1((prev) => !prev)} id="imUL1" cx="134" cy="15" r="4"
                                           fill={imUL1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr1((prev) => !prev)} id="imUr1" cx="112" cy="15" r="4"
                                           fill={imUr1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr2((prev) => !prev)} id="imUr2" cx="89" cy="20" r="4"
                                           fill={imUr2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr3((prev) => !prev)} id="imUr3" cx="70" cy="33" r="4"
                                           fill={imUr3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr4((prev) => !prev)} id="imUr4" cx="57" cy="51" r="4"
                                           fill={imUr4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr5((prev) => !prev)} id="imUr5" cx="46" cy="69" r="4"
                                           fill={imUr5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr6((prev) => !prev)} id="imUr6" cx="35" cy="95" r="4"
                                           fill={imUr6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr7((prev) => !prev)} id="imUr7" cx="26" cy="127" r="4"
                                           fill={imUr7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImUr8((prev) => !prev)} id="imUr8" cx="21" cy="156" r="4"
                                           fill={imUr8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr8((prev) => !prev)} id="imLr8" cx="23" cy="257" r="4"
                                           fill={imLr8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr7((prev) => !prev)} id="imLr7" cx="28" cy="286" r="4"
                                           fill={imLr7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr6((prev) => !prev)} id="imLr6" cx="36" cy="319" r="4"
                                           fill={imLr6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr5((prev) => !prev)} id="imLr5" cx="45" cy="343" r="4"
                                           fill={imLr5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr4((prev) => !prev)} id="imLr4" cx="52" cy="363" r="4"
                                           fill={imLr4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr3((prev) => !prev)} id="imLr3" cx="66" cy="383" r="4"
                                           fill={imLr3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr2((prev) => !prev)} id="imLr2" cx="84" cy="394" r="4"
                                           fill={imLr2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLr1((prev) => !prev)} id="imLr1" cx="105" cy="400" r="4"
                                           fill={imLr1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL1((prev) => !prev)} id="imLL1" cx="129" cy="400" r="4"
                                           fill={imLL1 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL2((prev) => !prev)} id="imLL2" cx="152" cy="397" r="4"
                                           fill={imLL2 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL3((prev) => !prev)} id="imLL3" cx="170" cy="386" r="4"
                                           fill={imLL3 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL4((prev) => !prev)} id="imLL4" cx="185" cy="368" r="4"
                                           fill={imLL4 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL5((prev) => !prev)} id="imLL5" cx="193" cy="350" r="4"
                                           fill={imLL5 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL6((prev) => !prev)} id="imLL6" cx="205" cy="322" r="4"
                                           fill={imLL6 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL7((prev) => !prev)} id="imLL7" cx="218" cy="290" r="4"
                                           fill={imLL7 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        {Implant ? <circle onClick={() => setImLL8((prev) => !prev)} id="imLL8" cx="221" cy="263" r="4"
                                           fill={imLL8 ? '#6A6A6A' : "#f9c1c4"}/> : ''}
                        // bridge
                        {Bridge ? <circle onClick={() => setBr11((prev) => !prev)} id="Br11" cx="179" cy="43" r="4"
                                          fill={Br11 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr12((prev) => !prev)} id="Br12" cx="190" cy="62" r="4"
                                          fill={Br12 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr13((prev) => !prev)} id="Br13" cx="198" cy="83" r="4"
                                          fill={Br13 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr14((prev) => !prev)} id="Br14" cx="210" cy="114" r="4"
                                          fill={Br14 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr15((prev) => !prev)} id="Br15" cx="215" cy="142" r="4"
                                          fill={Br15 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr16((prev) => !prev)} id="Br16" cx="221" cy="274" r="4"
                                          fill={Br16 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr17((prev) => !prev)} id="Br17" cx="212" cy="302" r="4"
                                          fill={Br17 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr18((prev) => !prev)} id="Br18" cx="200" cy="338" r="4"
                                          fill={Br18 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr19((prev) => !prev)} id="Br19" cx="190" cy="358" r="4"
                                          fill={Br19 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr20((prev) => !prev)} id="Br20" cx="177" cy="378" r="4"
                                          fill={Br20 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr21((prev) => !prev)} id="Br21" cx="160" cy="391" r="4"
                                          fill={Br21 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr22((prev) => !prev)} id="Br22" cx="141" cy="398" r="4"
                                          fill={Br22 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr23((prev) => !prev)} id="Br23" cx="117" cy="401" r="4"
                                          fill={Br23 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr24((prev) => !prev)} id="Br24" cx="93" cy="398" r="4"
                                          fill={Br24 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr25((prev) => !prev)} id="Br25" cx="76" cy="390" r="4"
                                          fill={Br25 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr26((prev) => !prev)} id="Br26" cx="61" cy="371" r="4"
                                          fill={Br26 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr27((prev) => !prev)} id="Br27" cx="49" cy="352" r="4"
                                          fill={Br27 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr28((prev) => !prev)} id="Br28" cx="41" cy="334" r="4"
                                          fill={Br28 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr29((prev) => !prev)} id="Br29" cx="31" cy="303" r="4"
                                          fill={Br29 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr30((prev) => !prev)} id="Br30" cx="26" cy="271" r="4"
                                          fill={Br30 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr10((prev) => !prev)} id="Br10" cx="164" cy="26" r="4"
                                          fill={Br10 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr9((prev) => !prev)} id="Br9" cx="145" cy="16" r="4"
                                          fill={Br9 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr8((prev) => !prev)} id="Br8" cx="123" cy="14" r="4"
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
                        {Bridge ? <circle onClick={() => setBr2((prev) => !prev)} id="Br2" cx="30" cy="114" r="4"
                                          fill={Br2 ? "#C02727" : "#DADADA"}/> : ''}
                        {Bridge ? <circle onClick={() => setBr1((prev) => !prev)} id="Br1" cx="23" cy="143" r="4"
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

            <div style={{
                [`& fieldset`]: {
                    borderRadius: '5px',
                    width: '50px',
                    height: '20',
                    textAlign: 'center',
                    paddingTop: 0,
                    fontSize: '2px',
                    color: 'black'

                }

            }}>
                <div style={{
                    width: 296,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    margin: 3,
                    borderRadius: 12
                }}>
                    {teeth.map((data, i) => {

                        return (

                            <TextField
                                style={{margin: 3, backgroundColor: '#fdd817', borderRadius: 12, paddingRight: 0}}

                                InputProps={{
                                    style: {
                                        flexBasis: '30%',
                                        borderRadius: 12,
                                        fontSize: 12,
                                        fontWeight: 'bolder',
                                        width: '90px'
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


            <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={design} onClick={designHandle}>نوع
                        طراحی</h5>
                    <img src={ChevronDown} checked={design} onClick={designHandle} style={{width: 16, marginLeft: 20}}/>
                </div>
            </div>
            <Slide style={{width: 296, marginBottom: 2}} direction="up" in={design} mountOnEnter unmountOnExit>
                <div style={{
                    marginLeft: -30,
                    width: 296,
                    height: 'fit-content',
                    alignItems: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>
                    <FormGroup dir="rtl" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
                        <div style={{
                            textAlign: 'end',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start'
                        }}>
                            <FormControlLabel onClick={() => setFrame((prev) => !prev)} control={< CheckBox/>}
                                              label="Frame" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setNightGurd((prev) => !prev)} control={< CheckBox/>}
                                              label="Night Gurd" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setPost((prev) => !prev)} control={< CheckBox/>}
                                              label="Post" labelPlacement="start"/>

                            <FormControlLabel onClick={() => setBridge((prev) => !prev)} control={< CheckBox/>}
                                              label="Bridge" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setOthertypes((prev) => !prev)} control={< CheckBox/>}
                                              label="Other types" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setImplant((prev) => !prev)} control={< CheckBox/>}
                                              label="Implant" labelPlacement="start"/>

                        </div>

                        <div style={{
                            textAlign: 'end',
                            width: '50%',
                            displa: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start'
                        }}>
                            <FormControlLabel onClick={() => setFullContour((prev) => !prev)} control={< CheckBox/>}
                                              label="Full Contour" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setVeneered((prev) => !prev)} control={< CheckBox/>}
                                              label="Veneered" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setSmileDesign((prev) => !prev)} control={< CheckBox/>}
                                              label="Smile Design" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setSurgicalGuide((prev) => !prev)} control={< CheckBox/>}
                                              label="Surgical Guide" labelPlacement="start"/>
                            <FormControlLabel onClick={() => setGumliftingGuide((prev) => !prev)} control={< CheckBox/>}
                                              label="Gum lifting Guide" labelPlacement="start"/>
                        </div>
                    </FormGroup>
                </div>
            </Slide>

            <div style={{
                lineHeight: 0
                , marginTop: 10
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{height: 53, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={treatment} onClick={treatmentHandle}>نوع
                        درمان</h5>
                    <img src={ChevronDown} checked={treatment} onClick={treatmentHandle}
                         style={{width: 16, marginLeft: 20}}/>
                </div>
            </div>
            <Slide style={{width: 296, marginBottom: 1}} direction="up" in={treatment} mountOnEnter unmountOnExit>
                <div style={{
                    width: 296,
                    height: 'fit-content',
                    alignItems: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>
                    <FormGroup dir="rtl"
                               style={{displa: 'flex', marginLeft: -20, flexDirection: 'row', justifyContent: 'start'}}>
                        <div style={{
                            textAlign: 'end',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start'
                        }}>
                            {FullContour || Frame ?
                                <FormControlLabel control={< CheckBox onClick={() => handleVeneerd('Veneer')}/>}
                                                  label="Veneer" labelPlacement="start"/> : ''}
                            {FullContour || Frame ?
                                <FormControlLabel control={< CheckBox onClick={() => hadleOnlay('Onlay')}/>}
                                                  label="Onlay" labelPlacement="start"/> : ''}
                            {FullContour || Frame ? <FormControlLabel
                                control={< CheckBox name='Pontic' onClick={() => hadlepontic('Pontic')}/>}
                                label="Pontic" labelPlacement="start"/> : ''}
                            {FullContour || Frame ?
                                <FormControlLabel control={< CheckBox onClick={() => handleMissing('Missing')}/>}
                                                  label="Missing" labelPlacement="start"/> : ''}
                            {NightGurd ?
                                <FormControlLabel control={< CheckBox onClick={() => set3Dprinting((prev) => !prev)}/>}
                                                  label="3D printing" labelPlacement="start"/> : ''}
                            {NightGurd ?
                                <FormControlLabel control={< CheckBox onClick={() => setVacume((prev) => !prev)}/>}
                                                  label="Vacume" labelPlacement="start"/> : ''}
                            {SmileDesign || SurgicalGuide || GumliftingGuide ?
                                <FormControlLabel control={< CheckBox/>} label="Design &D printing "
                                                  labelPlacement="start"/> : ''}
                            {SmileDesign || SurgicalGuide || GumliftingGuide ?
                                <FormControlLabel control={< CheckBox/>} label="Just design"
                                                  labelPlacement="start"/> : ''}

                        </div>
                        <div style={{
                            marginLeft: -16,
                            textAlign: 'end',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start'
                        }}>

                            {FullContour || Frame ?
                                <FormControlLabel control={< CheckBox onClick={() => hadleCrown('Crown')}/>}
                                                  label="Crown" labelPlacement="start"/> : ''}
                            {FullContour || Frame ?
                                <FormControlLabel control={< CheckBox onClick={() => hadleInlay('Inlay')}/>}
                                                  label="Inlay" labelPlacement="start"/> : ''}
                            {Implant ? <FormControlLabel onClick={() => setHybridabutment((prev) => !prev)}
                                                         control={< CheckBox/>} label="Hybrid abutment"
                                                         labelPlacement="start"/> : ''}
                            {Implant ? <FormControlLabel onClick={() => setScrawRetained((prev) => !prev)}
                                                         control={< CheckBox/>} label="Scraw Retained"
                                                         labelPlacement="start"/> : ''}
                            {Implant ?
                                <FormControlLabel onClick={() => setCemented((prev) => !prev)} control={< CheckBox/>}
                                                  label="Cemented" labelPlacement="start"/> : ''}
                            {Implant ? <FormControlLabel onClick={() => setCustomizeabutment((prev) => !prev)}
                                                         control={< CheckBox/>} label="Customize abutment "
                                                         labelPlacement="start"/> : ''}

                        </div>
                    </FormGroup>
                </div>
            </Slide>
            {Customizeabutment ? <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Material}
                        onClick={MaterialHandle}>متریال ابانتمنت</h5>
                    <img src={ChevronDown} checked={Material} onClick={MaterialHandle}
                         style={{width: 16, marginLeft: 20}}/>
                </div>
            </div> : ''}
            <Slide style={{width: 296, marginBottom: 2}} direction="up" in={Material} mountOnEnter unmountOnExit>
                <div style={{
                    textAlign: 'end',
                    width: 296,
                    height: 'fit-content',
                    alignItems: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>
                    <FormGroup dir="rtl" style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                        <div style={{
                            marginLeft: -16,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start'
                        }}>
                            <FormControlLabel control={< CheckBox onClick={() => setZirconiumOxide((prev) => !prev)}/>}
                                              label="Zirconium Oxide" labelPlacement="start"/>
                            <FormControlLabel control={< CheckBox onClick={() => setitanium((prev) => !prev)}/>}
                                              label="Titanium" labelPlacement="start"/>
                        </div>

                    </FormGroup>
                </div>
            </Slide>
            {Crown || Veneer || Onlay || Pontic || Missing || Inlay || Hybridabutment || ScrawRetained ||
            Cemented || ZirconiumOxide || Titanium ? <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Material}
                        onClick={MaterialHandle}>متریال دندان</h5>
                    <img src={ChevronDown} checked={Material} onClick={MaterialHandle}
                         style={{width: 16, marginLeft: 20}}/>
                </div>
            </div> : ''}
            <Slide style={{width: 296, marginBottom: 2}} direction="up" in={Material} mountOnEnter unmountOnExit>
                <div style={{
                    textAlign: 'end',
                    width: 296,
                    height: 'fit-content',
                    alignItems: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>
                    <FormGroup dir="rtl" style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                        <div style={{
                            marginLeft: -16,
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
                                <FormControlLabel control={< CheckBox/>} label="PMMA" labelPlacement="start"/> : ''}
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
                            <FormControlLabel control={< CheckBox/>} label="Titanium" labelPlacement="start"/>
                        </div>

                    </FormGroup>
                </div>
            </Slide>

            {Post || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal
                ? <div style={{
                    lineHeight: 0
                    , width: 296
                    , backgroundColor: '#FDD817'
                    , padding: 1
                    , marginTop: 10
                    , borderRadius: 12
                    , paddingRight: 2
                }}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Prostheticcolor}
                            onClick={ProstheticcolorHandle}>انتخاب رنگ پروتز</h5>
                        <img src={ChevronDown} checked={Prostheticcolor} onClick={ProstheticcolorHandle}
                             style={{width: 16, marginLeft: 20}}/>
                    </div>
                </div> : ''}
            <Slide style={{width: 296, marginBottom: 1}} direction="up" in={Prostheticcolor} mountOnEnter unmountOnExit>
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
                            marginLeft: -16,
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
                                    <FormControlLabel control={< CheckBox/>} label="VITA Classic"
                                                      labelPlacement="start"/>
                                </div>
                            </FormGroup>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                            <FormGroup dir="rtl" style={{displa: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                                <div style={{
                                    width: '100%',
                                    displa: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'start'
                                }}>
                                    <FormControlLabel control={< CheckBox/>} label="VITA 3D master"
                                                      labelPlacement="start"/>
                                </div>
                            </FormGroup>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <TextField style={{margin: 5}} inputProps={{
                                    style: {
                                        fontSize: 12,
                                        fontWeight: 'bolder',
                                        padding: '5px',
                                        textAlign: 'center'
                                    }
                                }} size="small" value='OM3' readonly/>
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
                                    style: {
                                        fontSize: 12,
                                        fontWeight: 'bolder',
                                        padding: '5px',
                                        textAlign: 'center'
                                    }
                                }} size="small" value='A3.5' readonly/>
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
            </Slide>


            {Post || D3printing || Vacume || Design3dPrinting || Justdesign || ZirconiumOxide || PMMA ||
            LithiumDislioate || PreciousMetal || GlassCeramic || Composite || NonPreciousMetal ? <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 1
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={ColorBase}
                        onClick={ProstheticcolorHandle}>رنگ Base</h5>
                    <img src={ChevronDown} checked={ColorBase} onClick={ColorBaseHandle}
                         style={{width: 16, marginLeft: 20}}/>
                </div>
            </div> : ' '}
            <Slide style={{width: 296, marginBottom: 2}} direction="up" in={ColorBase} mountOnEnter unmountOnExit>
                <div style={{
                    width: 296,
                    height: 'fit-content',
                    alignItems: 'end',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>

                    <div style={{display: 'flex', flexDirection: 'column'}}>

                        <div style={{display: 'flex', paddingBottom: 1, flexDirection: 'column'}}>
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
                                        <FormControlLabel control={< CheckBox/>} label="VITA Classic"
                                                          labelPlacement="start"/>
                                    </div>
                                </FormGroup>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between'
                            }}>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                                <FormGroup dir="rtl"
                                           style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'start'
                                    }}>
                                        <FormControlLabel control={< CheckBox/>} label="VITA 3D master"
                                                          labelPlacement="start"/>
                                    </div>
                                </FormGroup>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between'
                            }}>
                                <div
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                    <TextField style={{margin: 5}} inputProps={{
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            padding: '5px',
                                            textAlign: 'center'
                                        }
                                    }} size="small" value='OM3' readonly/>
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            padding: '5px',
                                            textAlign: 'center'
                                        }
                                    }} size="small" value='A3.5' readonly/>
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                    <TextField style={{visibility: 'hidden', margin: 5}} inputProps={{
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
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>

                            <div style={{
                                width: 296,
                                height: 'fit-content',
                                alignItems: 'end',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start'
                            }}>
                                <FormGroup dir="rtl"
                                           style={{displa: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
                                    <div style={{
                                        marginLeft: -20,
                                        textAlign: 'end',
                                        width: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'end'
                                    }}>
                                        <FormControlLabel control={< CheckBox/>} label="سیاهی" labelPlacement="start"/>
                                        <FormControlLabel control={< CheckBox/>} label="پست ریختگی"
                                                          labelPlacement="start"/>
                                        <FormControlLabel control={< CheckBox/>} label="پست NPG"
                                                          labelPlacement="start"/>
                                        <FormControlLabel control={< CheckBox/>} label="بدرنگی" labelPlacement="start"/>
                                    </div>
                                </FormGroup>
                            </div>

                        </div>
                    </div>
                </div>
            </Slide>


            <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}}>آخرین مهلت مجاز تحویل</h5>

                    <LocalizationProvider dateAdapter={AdapterJalali}>
                        <DatePicker
                            open={isForcePickerOpen}
                            onClose={() => setIsOpen(false)}
                            value={selectedDate}
                            onChange={handleDateChange}
                            renderInput={({
                                              ref,
                                              inputProps,
                                              disabled,
                                              onChange,
                                              value,
                                              ...other

                                          }) => (
                                <div ref={ref} {...other}>
                                    <input
                                        style={{display: "none"}}
                                        value={value}
                                        onChange={onChange}
                                        disabled={disabled}
                                        {...inputProps}
                                    />
                                    <Button
                                        style={{width: 14, marginTop: 2}}
                                        variant="text"
                                        color="primary"
                                        onClick={() => setIsOpen((isOpen) => !isOpen)}
                                    >
                                        <img src={date}/>
                                    </Button>
                                </div>
                            )}
                        />
                    </LocalizationProvider>
                </div>
            </div>


            <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , padding: 1
                , marginTop: 10
                , borderRadius: 12
                , paddingRight: 2
            }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h5 style={{fontWeight: 'bold', paddingRight: 18}} checked={Material}>پیوست</h5>
                    <Dialog PaperProps={{
                        sx: {borderRadius: 12}
                    }
                    }
                            transitionDuration={700}
                            fullWidth
                            maxWidth="sm"
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <div style={{
                                    width: '100%',
                                    height: 'fit-content',
                                    lineHeight: 2,
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{display: 'none'}}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file" hidden
                                        />

                                        <Button onClick={uploadFiles} component="span">
                                            ارسال فایل اسکن شده
                                        </Button>
                                    </label>
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{display: 'none'}}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file" hidden
                                        />

                                        <Button onClick={uploadFiles} component="span">
                                            ارسال فایل صوتی
                                        </Button>
                                    </label>
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{display: 'none'}}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file" hidden
                                        />

                                        <Button onClick={uploadFiles} component="span">
                                            اتصال به دوربین
                                        </Button>
                                    </label>
                                </div>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    <AddOutlinedIcon fontSize='large' style={{marginTop: 3, marginLeft: 10}} onClick={handleClickOpen}/>
                </div>
            </div>


            <div style={{
                lineHeight: 0
                , width: 296
                , backgroundColor: '#FDD817'
                , marginTop: 10
                , borderRadius: 12
            }}>
                <div style={{display: 'flex', border: 'none', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextField
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            sx: {width: 280, height: 60, paddingRight: 1.5},
                            endAdornment: (
                                <InputAdornment position="end" style={{marginLeft: 2.5}}>
                                    <img src={Chat}/>
                                </InputAdornment>

                            ),

                        }}
                        id="outlined-password-input"
                        placeholder='توضیحات اضافه'
                        type="text"

                    />
                </div>
            </div>


            <Link style={{textDecoration: 'none'}} to='/ReportWorkorder'> <Button variant='contained' style={{
                marginTop: 20,
                height: 54,
                width: 224,
                color: '#FDD817',
                backgroundColor: '#A8A8AA'
            }}>تایید</Button></Link>
        </div>
    )
}
