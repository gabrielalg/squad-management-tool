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
    "5 - 4 - 1"]

  return <>
    {options.map((value) => { 
        return  <option value={value} key={value}>{value}</option>
    })}
  </>
}

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Team name is required";
  }

  if (!values.website) {
    errors.website = "Website is required";
  } else if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(values.website)) {
    errors.website = "Invalid URL";
  }

  if (!values.type) {
    errors.type = "Team type is required";
  } 

  if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
    const teamInfo = document.querySelector('#teamInfo').offsetTop - 80;
    document.querySelector('#root').scrollTo({top: teamInfo, behavior: "smooth"});
  }
  
  return errors;
};

const NewTeam = () => {

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
            website: "",
            type: "",
            formation: "3 - 4 - 3",
             }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 1000)
          }}
        >
        {(props) => (
        <Form >
        <div className={style['team-information']}>
          <h3 className="text-body" id="teamInfo">Team Information</h3>
            <div>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} className={style['form-item']} >
                    <FormLabel htmlFor="name">Team Name</FormLabel>
                    <Input {...field} 
                          id="name"
                          placeholder="Insert team name"/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="description">
                {({ field }) => (
                  <FormControl className={style['form-item-full']}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea {...field} id="description" />
                  </FormControl>
                )}
              </Field>
            </div>
            <div>
              <Field name="website">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.website && form.touched.website} className={style['form-item']}>
                    <FormLabel htmlFor="website">Team Website</FormLabel>
                    <Input {...field} 
                           id="website" 
                           placeholder="https://myteam.com"/>
                    <FormErrorMessage>{form.errors.website}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="type">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.type && form.touched.type} className={style['form-item']}>
                    <FormLabel htmlFor="type">Team Type</FormLabel>
                    <RadioGroup {...field} id="type">
                      <HStack spacing="30px">
                        <Radio {...field} size="lg" _checked={{ bg: "brandPink.600" }} value="Real">Real</Radio>
                        <Radio {...field} size="lg" _checked={{ bg: "brandPink.600" }} value="Fantasy">Fantasy</Radio>
                      </HStack>
                    </RadioGroup>
                    <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="tags">
                {({ field }) => (
                  <FormControl className={style['form-item']} >
                    <FormLabel htmlFor="tags">Tags</FormLabel>
                    <Textarea {...field} id="tags"/>
                  </FormControl>
                  )}
              </Field>
            </div>
        </div>
        <div className={style['configure-squad']}>
          <h3 className="text-body">Configure Squad</h3>
          <div>
            <Field name="formation">
              {({ field }) => (
                <FormControl className={style['form-item']}>
                  <FormLabel htmlFor="formation">Formation</FormLabel>
                  <Select {...field} id="formation">
                    <TeamFormationOptions />
                  </Select>
                </FormControl>
              )}
            </Field>
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
            <FormControl id="search" className={style['form-item']}>
              <FormLabel>Search Players</FormLabel>
              <Input type="text" placeholder="Player name"/>
            </FormControl>
          </div>
        </div>
        <div className={style['action-bar']}>
          <span className="grey-a020-line"></span>
          <Button
            variant="gradient"
            isLoading={props.isSubmitting}
            type="submit"
            className={style['btn-save']}
          >
            Save
          </Button>
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