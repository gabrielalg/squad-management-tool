import { Input, Textarea, Select, Button, HStack, FormControl, FormLabel, FormErrorMessage, Radio, RadioGroup } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

// CSS
import style from '../assets/css/pages/new-team.module.css';

// ELEMENTS
import Card from '../elements/Card.js';
// import Button from '../elements/Button.js';

const TeamFormationOptions = () => {
  const options = [
    "3 - 4 - 3",
    "3 - 2 - 2 - 3",
    "3 - 2 - 3 - 1",
    "3 - 5 - 2",
    "4 - 2 - 3 - 1",
    "4 - 3 - 1 - 1",
    "4 - 3 - 2",
    "4 - 4 - 2",
    "4 - 5 - 1",
    "5 - 4 -1"]

  return <>
    {options.map((value) => { 
      return (
        <option value={value} key={value}>{value}</option>
      )
    })}
  </>
}

const NewTeam = () => {

  function validateName(value) {
    let error
    if (!value) {
      error = "Team name is required"
    } 
    return error
  }

  return <>
  <section>
    <div className="content flex-row">
      <Card className={style['card-item']}>
        <div className={`flex-row ${style['card-item__title']}`}>
          <h2 className="text-subtitle">Create Your Team</h2>
          <span className="grey-a010-line"></span>
        </div>
        <Formik
          initialValues={{ 
            name: "", 
            description: "",
             }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
        {(props) => (
        <Form>
        <div className={style['team-information']}>
          <h3 className="text-body">Team Information</h3>
            <div>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} className={style['form-item']} isRequired>
                    <FormLabel htmlFor="name">Team Name</FormLabel>
                    <Input {...field} id="name" type="text" placeholder="Insert team name"/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <FormControl id="description" className={style['form-item-full']}>
                <FormLabel>Description</FormLabel>
                <Textarea />
              </FormControl>
            </div>
            <div>
              <FormControl id="website" className={style['form-item']} isRequired>
                <FormLabel>Team Website</FormLabel>
                <Input type="url" placeholder="https://myteam.com"/>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl as="fieldset" id="teamType" className={style['form-item']} isRequired>
                <FormLabel as="legend">Team Type</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="30px">
                    <Radio size="lg" _checked={{ bg: "brandPink.600" }} height="20px" value="Real">Real</Radio>
                    <Radio size="lg" _checked={{ bg: "brandPink.600" }} value="Fantasy">Fantasy</Radio>
                  </HStack>
                </RadioGroup>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl id="teamTags" className={style['form-item']} >
                <FormLabel>Tags</FormLabel>
                <Textarea />
              </FormControl>
            </div>
        </div>
        <div className={style['configure-squad']}>
          <h3 className="text-body">Configure Squad</h3>
          <div>
            <FormControl id="teamFormation" className={style['form-item']} isRequired>
              <FormLabel>Formation</FormLabel>
              <Select>
                <TeamFormationOptions />
              </Select>
            </FormControl>
            <div className={style['soccer-field']}>
              <div>
                <div className={`flex-row ${style['players-row']}`}>
                  <Link to="/new-team">
                   <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                </div>
                <div className={`flex-row ${style['players-row']}`}>
                  <Link to="/new-team">
                   <span> + </span>
                  </Link>
                </div>
              </div>
              <span className={style.circle}></span>
              <div>
                <div className={`flex-row ${style['players-row-middle']}`}>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                </div>
                <div className={`flex-row ${style['players-row']}`}>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                </div>
                <div className={`flex-row ${style['players-row']}`}>
                  <Link to="/new-team">
                    <span> + </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FormControl id="searchPlayers" className={style['form-item']}>
              <FormLabel>Search Players</FormLabel>
              <Input type="text" placeholder="Player name"/>
            </FormControl>
          </div>
        </div>
        <div className={style['action-bar']}>
          <span className="grey-a020-line"></span>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
            className={style['btn-save']}
          >
            Submit
          </Button>
          {/* <Button to="/new-team" type="fill" className={style['btn-save']}>
            Save
          </Button> */}
        </div>
        </Form>
        )}
        </Formik>
      </Card>
    </div>
  </section>
  </>
}

export default NewTeam;